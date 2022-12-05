import { avatar } from 'dawn-js-ui'

import template from './template'
import styles from './styles'

import avatarSrc from '@/assets/images/img-avatar.jpg'

export const appPage = () => {
  const appAvatar1 = avatar()
  const appAvatar2 = avatar()
  const appAvatar3 = avatar()
  const appAvatar4 = avatar()
  const appAvatar5 = avatar()
  const appAvatar6 = avatar()

  const dsUser1 = avatar()
  const dsUser2 = avatar()
  const dsUser3 = avatar()
  const dsUser4 = avatar()
  const dsUser5 = avatar()
  const dsUser6 = avatar()

  const hooks = () => ({
    afterOnRender
  })

  const afterOnRender = ({ appElement }) => {
    appAvatar1.register('ds-avatar-1', appElement)
    appAvatar1.props.set({
      size: 6,
      style: 'square'
      // img: { src: avatarSrc, alt: 'Foto do usuário Rodrigo' },
      // note: { status: 'warning', position: 'top-right' }
    })
    appAvatar1.init()

    appAvatar2.register('ds-avatar-2', appElement)
    appAvatar2.props.set({
      size: 2,
      style: 'square'
      // img: { src: avatarSrc, alt: 'Foto do usuário Rodrigo' },
      // note: { status: 'danger', position: 'top-right' }
    })
    appAvatar2.init()

    appAvatar3.register('ds-avatar-3', appElement)
    appAvatar3.props.set({
      size: 3,
      style: 'square'
      // img: { src: avatarSrc, alt: 'Foto do usuário Rodrigo' },
      // note: { status: 'success', position: 'top-right' }
    })
    appAvatar3.init()

    appAvatar4.register('ds-avatar-4', appElement)
    appAvatar4.props.set({
      size: 4,
      style: 'square'
      // img: { src: avatarSrc, alt: 'Foto do usuário Rodrigo' },
      // note: { status: 'danger', position: 'top-right' }
    })
    appAvatar4.init()

    appAvatar5.register('ds-avatar-5', appElement)
    appAvatar5.props.set({
      size: 5,
      style: 'square'
      // img: { src: avatarSrc, alt: 'Foto do usuário Rodrigo' },
      // note: { status: 'success', position: 'top-right' }
    })
    appAvatar5.init()

    appAvatar6.register('ds-avatar-6', appElement)
    appAvatar6.props.set({
      size: 6,
      style: 'square'
      // img: { src: avatarSrc, alt: 'Foto do usuário Rodrigo' },
      // note: { status: 'warning', position: 'top-right' }
    })
    appAvatar6.init()

    // user

    dsUser1.register('ds-user-1', appElement)
    dsUser1.props.set({
      size: 1,
      style: 'circle'
      // img: { src: avatarSrc, alt: 'Foto do usuário Rodrigo' },
      // note: { status: 'warning', position: 'top-right' }
    })
    dsUser1.init()

    dsUser2.register('ds-user-2', appElement)
    dsUser2.props.set({
      size: 2,
      style: 'circle'
      // img: { src: avatarSrc, alt: 'Foto do usuário Rodrigo' },
      // note: { status: 'danger', position: 'top-right' }
    })
    dsUser2.init()

    dsUser3.register('ds-user-3', appElement)
    dsUser3.props.set({
      size: 3,
      style: 'circle'
      // img: { src: avatarSrc, alt: 'Foto do usuário Rodrigo' },
      // note: { status: 'success', position: 'top-right' }
    })
    dsUser3.init()

    dsUser4.register('ds-user-4', appElement)
    dsUser4.props.set({
      size: 4,
      style: 'circle'
      // img: { src: avatarSrc, alt: 'Foto do usuário Rodrigo' },
      // note: { status: 'danger', position: 'top-right' }
    })
    dsUser4.init()

    dsUser5.register('ds-user-5', appElement)
    dsUser5.props.set({
      size: 5,
      style: 'circle'
      // img: { src: avatarSrc, alt: 'Foto do usuário Rodrigo' },
      // note: { status: 'success', position: 'top-right' }
    })
    dsUser5.init()

    dsUser6.register('ds-user-6', appElement)
    dsUser6.props.set({
      size: 6,
      style: 'circle',
      note: { status: 'off', position: 'top-right' },
      img: { src: avatarSrc, alt: 'Foto do usuário Rodrigo' }
    })
    dsUser6.init()
  }

  return { template, styles, hooks }
}
