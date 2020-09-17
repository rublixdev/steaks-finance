import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract, getFarms } from '../steak/utils'
import useSteak from './useSteak'
import useBlock from './useBlock'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([] as Array<BigNumber>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const steak = useSteak()
  const farms = getFarms(steak)
  const masterChefContract = getMasterChefContract(steak)
  const block = useBlock()

  const fetchAllBalances = useCallback(async () => {
    const balances: Array<BigNumber> = await Promise.all(
      farms.map(({ pid }: { pid: number }) =>
        getEarned(masterChefContract, pid, account),
      ),
    )
    setBalance(balances)
  }, [account, masterChefContract, steak])

  useEffect(() => {
    if (account && masterChefContract && steak) {
      fetchAllBalances()
    }
  }, [account, block, masterChefContract, setBalance, steak])

  return balances
}

export default useAllEarnings
