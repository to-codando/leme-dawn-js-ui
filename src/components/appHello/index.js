import { observerFactory } from 'lemejs'
import { appInput } from 'dawn-js-ui'

import { appText } from '../appText'

import template from './template'
import styles from './styles'

const appHello = () => {
  const state = observerFactory({
    title: 'Hello World!',
    text: 'Now it`s with lemeJs!!!'
  })

  const children = () => ({ appText })

  const hooks = () => ({
    afterOnInit
  })

  const afterOnInit = ({ appElement, queryOnce }) => {
    appInput.register('ds-name', appElement)
    appInput.props.set({ label: 'Nome' })
    appInput.init()
  }

  return {
    state,
    template,
    styles,
    children,
    hooks
  }
}

export { appHello }
