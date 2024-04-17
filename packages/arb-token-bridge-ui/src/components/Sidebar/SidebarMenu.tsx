import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { usePostHog } from 'posthog-js/react'
import { Fragment } from 'react'

import {
  ChevronDownIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline'

import IconHome from '@/images/sidebar/home.svg'
import IconProjects from '@/images/sidebar/projects.svg'

import IconBridge from '@/icons/bridge.svg'
import IconRollup from '@/icons/rollupIcon.svg'
import IconLearn from '@/images/sidebar/learn.svg'
import IconCommunity from '@/images/sidebar/community.svg'
import IconOrbit from '@/images/sidebar/orbit.svg'
import IconCareers from '@/images/sidebar/careers.svg'
import IconTools from '@/images/sidebar/tools.svg'
import IconGetHelp from '@/images/sidebar/gethelp.svg'
import IconMissions from '@/images/sidebar/missions.svg'
import { useSidebarStore } from './SidebarStore'

import {
  communityMenuItems,
  learnMenuItems,
  orbitMenuItems,
  toolsMenuItems
} from './menu'
import { ExternalLink } from '../common/ExternalLink'
import {
  CAREERS_ARBITRUM_LINK,
  GET_HELP_LINK,
  ROLLUP_DASHBOARD_LINK,
  PORTAL_DOMAIN
} from '../../constants'

type MenuConfig = {
  id: string
  title: string
  iconSrc: string
  isExternalLink?: boolean // is this an external link? shows a link arrow icon.
  isExpandable?: boolean // can it be expanded? - shows a dropdown icon.
  onClick?: () => void
  children?: React.ReactNode
  className?: string
  link?: string
}

const stringToKey = (str: string) => str.split(' ').join('_').toLowerCase()

const MenuItem = ({
  menu,
  children,
  className
}: {
  menu: MenuConfig
  children?: React.ReactNode
  className?: string
}) => {
  const { sidebarOpened } = useSidebarStore()
  const pathname = usePathname().replace('/', '')

  const menuClasses = twMerge(
    'group flex items-center sm:rounded px-[12px] py-[8px] text-base hover:bg-white/20 cursor-pointer hover:opacity-100 hover:text-white',
    sidebarOpened ? 'gap-x-[16px] min-w-[200px]' : 'flex-col px-[8px]',
    `/${pathname}` === `${menu.link}` && 'text-white bg-white/20',
    pathname === menu.link && 'text-white bg-white/20',

    className
  )

  if (menu.isExternalLink) {
    return (
      <ExternalLink
        href={menu.link}
        className={menuClasses}
        onClick={menu.onClick}
      >
        {children}
      </ExternalLink>
    )
  }

  if (menu.link) {
    return (
      <Link href={menu.link} className={menuClasses} onClick={menu.onClick}>
        {children}
      </Link>
    )
  }

  return (
    <button className={menuClasses} onClick={menu.onClick}>
      {children}
    </button>
  )
}

export const SidebarMenu = ({
  menuItemClickCallback,
  className
}: {
  menuItemClickCallback?: () => void
  className?: string
}) => {
  const posthog = usePostHog()
  const { sidebarOpened, activeMenu, setActiveMenu } = useSidebarStore()

  function sendClickEventForGroup(groupTitle: string) {
    posthog?.capture('Sidebar Menu Dropdown Click', {
      Group: groupTitle
    })
  }

  function sendClickEventForLink(linkTitle: string) {
    posthog?.capture('Sidebar Menu Link Click', {
      Link: linkTitle
    })
  }

  function sendClickEventForMenuItem(menuItem: string) {
    posthog?.capture('Sidebar Menu Item Click', {
      Item: menuItem
    })
  }

  const toggleActiveMenu = (menuId: string) => {
    if (activeMenu === menuId) {
      setActiveMenu('')
    } else {
      setActiveMenu(menuId)
    }

    // also send analytics event for group toggle click
    const menuGroupName = menuConfig.find(menuItem => menuId === menuItem.id)?.[
      'title'
    ]
    if (menuGroupName) sendClickEventForGroup(menuGroupName)
  }

  const menuConfig: MenuConfig[] = [
    // {
    //   id: 'home',
    //   title: 'Home',
    //   iconSrc: IconHome,
    //   isExternalLink: false,
    //   isExpandable: false,
    //   link: PORTAL_DOMAIN,
    //   onClick: () => {
    //     setActiveMenu('home')
    //     menuItemClickCallback?.()
    //   }
    // },
    // {
    //   id: 'projects',
    //   title: 'Projects',
    //   iconSrc: IconProjects,
    //   isExternalLink: false,
    //   isExpandable: true,
    //   onClick: () => {
    //     toggleActiveMenu('projects')
    //   },
    //   children: (
    //     <div className="mb-[16px] flex flex-col gap-[8px] text-sm">
    //       {Object.entries(projectCategories).map(([categoryName, path]) => (
    //         <SubMenuItem
    //           link={`${PORTAL_DOMAIN}/projects/${path}`}
    //           onClick={() => {
    //             menuItemClickCallback?.()
    //             sendClickEventForMenuItem(categoryName)
    //           }}
    //           key={path}
    //         >
    //           {categoryName}
    //         </SubMenuItem>
    //       ))}
    //     </div>
    //   )
    // },
    // {
    //   id: 'arcade',
    //   title: 'Arcade',
    //   iconSrc: IconMissions,
    //   isExternalLink: false,
    //   link: `${PORTAL_DOMAIN}/arcade`,
    //   className:
    //     'bg-gradient-to-r from-[#E59010] to-[#00ADE3] bg-clip-text text-transparent',
    //   onClick: () => {
    //     menuItemClickCallback?.()
    //     sendClickEventForLink('Arcade')
    //   }
    // },
    // {
    //   id: 'orbit',
    //   title: 'Orbit',
    //   iconSrc: IconOrbit,
    //   isExpandable: true,
    //   isExternalLink: false,
    //   onClick: () => toggleActiveMenu('orbit'),
    //   children: (
    //     <div className="mb-4 flex flex-col gap-2 text-sm">
    //       {orbitMenuItems.map(subMenuItem => (
    //         <SubMenuItem
    //           key={stringToKey(subMenuItem.title)}
    //           link={subMenuItem.link}
    //           onClick={() => {
    //             menuItemClickCallback?.()
    //             sendClickEventForMenuItem(subMenuItem.title)
    //           }}
    //         >
    //           {subMenuItem.title}
    //         </SubMenuItem>
    //       ))}
    //     </div>
    //   )
    // },
    {
      id: 'rollup',
      title: 'Rollup Dashboard',
      iconSrc: IconRollup,
      link: ROLLUP_DASHBOARD_LINK,
      isExternalLink: true,

      onClick: () => {
        menuItemClickCallback?.()
        sendClickEventForLink('Rollup')
        toggleActiveMenu('rollup')
      }
    },

    {
      id: 'bridge',
      title: 'Bridge',
      iconSrc: IconBridge,
      link: '/',
      isExternalLink: true,
      onClick: () => {
        menuItemClickCallback?.()
        sendClickEventForLink('Bridge')
        toggleActiveMenu('bridge')
      }
    }
    // {
    //   id: 'learn',
    //   title: 'Learn',
    //   iconSrc: IconLearn,
    //   isExpandable: true,
    //   isExternalLink: false,
    //   onClick: () => toggleActiveMenu('learn'),
    //   children: (
    //     <div className="mb-[16px] flex flex-col gap-[8px] text-sm">
    //       {learnMenuItems.map(subMenuItem => (
    //         <SubMenuItem
    //           key={stringToKey(subMenuItem.title)}
    //           link={subMenuItem.link}
    //           onClick={() => {
    //             menuItemClickCallback?.()
    //             sendClickEventForMenuItem(subMenuItem.title)
    //           }}
    //           isExternalLink
    //         >
    //           {subMenuItem.title}
    //         </SubMenuItem>
    //       ))}
    //     </div>
    //   )
    // },
    // {
    //   id: 'tools',
    //   title: 'Tools',
    //   iconSrc: IconTools,
    //   isExternalLink: false,
    //   isExpandable: true,
    //   onClick: () => toggleActiveMenu('tools'),
    //   children: (
    //     <div className="mb-[16px] flex flex-col gap-[8px] text-sm">
    //       {toolsMenuItems.map(subMenuItem => (
    //         <SubMenuItem
    //           key={stringToKey(subMenuItem.title)}
    //           link={subMenuItem.link}
    //           onClick={() => {
    //             menuItemClickCallback?.()
    //             sendClickEventForMenuItem(subMenuItem.title)
    //           }}
    //           isExternalLink
    //         >
    //           {subMenuItem.title}
    //         </SubMenuItem>
    //       ))}
    //     </div>
    //   )
    // },
    // {
    //   id: 'community',
    //   title: 'Community',
    //   iconSrc: IconCommunity,
    //   isExternalLink: false,
    //   isExpandable: true,
    //   onClick: () => toggleActiveMenu('community'),
    //   children: (
    //     <div className="mb-[16px] flex flex-col gap-[8px] text-sm">
    //       {communityMenuItems.map(subMenuItem => (
    //         <SubMenuItem
    //           key={stringToKey(subMenuItem.title)}
    //           link={subMenuItem.link}
    //           onClick={() => {
    //             menuItemClickCallback?.()
    //             sendClickEventForMenuItem(subMenuItem.title)
    //           }}
    //           isExternalLink
    //         >
    //           {subMenuItem.title}
    //         </SubMenuItem>
    //       ))}
    //     </div>
    //   )
    // },
    // {
    //   id: 'careers',
    //   title: 'Ecosystem Jobs',
    //   iconSrc: IconCareers,
    //   isExternalLink: true,
    //   link: CAREERS_ARBITRUM_LINK,
    //   onClick: () => {
    //     menuItemClickCallback?.()
    //     sendClickEventForLink('Careers')
    //   }
    // },
    // {
    //   id: 'getHelp',
    //   title: 'Get Help',
    //   iconSrc: IconGetHelp,
    //   isExternalLink: true,
    //   link: GET_HELP_LINK,
    //   onClick: () => {
    //     menuItemClickCallback?.()
    //     sendClickEventForLink('Get Help')
    //   }
    // }
  ]

  return (
    <div
      className={twMerge(
        'mt-0 flex w-full flex-col gap-[2px] text-white',
        'sm:mt-[20px] sm:shrink sm:grow sm:gap-[8px] sm:overflow-auto',
        sidebarOpened ? 'px-[16px]' : 'px-[4px]',
        className
      )}
    >
      {menuConfig.map((menu, index) => (
        <Fragment key={`menu-${index}`}>
          <MenuItem menu={menu}>
            {/* Menu icon */}
            <Image
              src={menu.iconSrc}
              alt={menu.title}
              className={twMerge('h-[24px] w-[24px] ')}
            />

            {/* Menu title */}
            <span
              className={twMerge(
                '  -ml-2 grow origin-center  px-2 text-left  text-base duration-200',
                !sidebarOpened && 'sm:hidden',
                menu.className
              )}
            >
              {menu.title}
            </span>

            {/* Action icons */}
            {menu.isExpandable && (
              <ChevronDownIcon
                className={twMerge(
                  'h-[16px] w-[16px] transition duration-200',
                  menu.id === activeMenu && 'rotate-180',
                  !sidebarOpened && 'sm:hidden'
                )}
              />
            )}

            {/* {menu.isExternalLink && (
              <ArrowTopRightOnSquareIcon
                className={twMerge(
                  'h-[16px] w-[16px] opacity-70 group-hover:opacity-100',
                  !sidebarOpened && 'hidden'
                )}
              />
            )} */}
          </MenuItem>

          <div
            key={`dropdown-${index}`}
            className={twMerge(
              'max-h-0 shrink-0 grow-0 overflow-hidden transition-[max-height] duration-300',
              activeMenu === menu.id && 'max-h-[800px]'
            )}
          >
            {sidebarOpened && menu.children}
          </div>
        </Fragment>
      ))}
    </div>
  )
}
