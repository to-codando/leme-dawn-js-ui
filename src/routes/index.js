import { routerFactory } from 'lemejs'

import { appNotFound } from '../components/appNotFound'
import { appPage } from '@/components/appPage'

const router = routerFactory()

router.add({
  hash: '/',
  validator: /^#\/$/,
  component: appPage,
  isInitial: true
})

router.add({
  hash: 'not-found',
  validator: /^#\/not-found$/,
  component: appNotFound,
  isDefault: true
})

export { router }
