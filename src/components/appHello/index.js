import { observerFactory } from 'lemejs'
import { dawnJS } from 'dawn-js-core'
import { input } from 'dawn-js-ui'

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

  const afterOnInit = ({ queryOnce }) => {
    const dsName = queryOnce('[data-component=ds-name]')
    const appInputName = dawnJS.component.create(input)
    appInputName.register(dsName)
    appInputName.init()
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
