import InfoCard from './InfoCard'
import MenuButtonGroup from './MenuButtonGroup'
import SearchInput from './SearchInput'
import Toc from './Toc'
import { useGlobal } from '@/lib/global'
import React from 'react'
import Tabs from '@/components/Tabs'
import Logo from './Logo'
import Card from './Card'
import CONFIG_NEXT from '../config_next'
import BLOG from '@/blog.config'

/**
 * 侧边平铺
 * @param tags
 * @param currentTag
 * @param post
 * @param currentSearch
 * @returns {JSX.Element}
 * @constructor
 */
const SideAreaLeft = props => {
  const { post, slot, postCount } = props
  const { locale } = useGlobal()
  const showToc = post && post.toc && post.toc.length > 1
  return <aside id='left' className={(BLOG.LAYOUT_SIDEBAR_REVERSE ? 'ml-4' : 'mr-4') + ' hidden lg:block flex-col w-60 z-10 relative'}>

        <section
            data-aos="fade-down"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"
            className='w-60'>
            {/* 菜单 */}
            <section className='shadow hidden lg:block mb-5 pb-4 bg-white dark:bg-hexo-black-gray hover:shadow-xl duration-200'>
                <Logo {...props} className='h-32' />
                <div className='pt-2 px-2 font-sans'>
                    <MenuButtonGroup allowCollapse={true} {...props} />
                </div>
                {CONFIG_NEXT.MENU_SEARCH && <div className='px-2 pt-2 font-sans'>
                    <SearchInput {...props} />
                </div>}
            </section>
        </section>

        <div className='sticky top-4 hidden lg:block'>
            <Card>
                <Tabs>
                    {showToc && (
                        <div key={locale.COMMON.TABLE_OF_CONTENTS} className='dark:text-gray-400 text-gray-600 bg-white dark:bg-hexo-black-gray duration-200'>
                            <Toc toc={post.toc} />
                        </div>
                    )}

                    <div key={locale.NAV.ABOUT} className='mb-5 bg-white dark:bg-hexo-black-gray duration-200 py-6'>
                        <InfoCard {...props} />
                        <>
                            <div className='mt-2 text-center dark:text-gray-300 font-light text-xs'>
                                <span className='px-1 '>
                                    <strong className='font-medium'>{postCount}</strong>{locale.COMMON.POSTS}</span>
                                <span className='px-1 busuanzi_container_site_uv hidden'>
                                    | <strong className='pl-1 busuanzi_value_site_uv font-medium' />{locale.COMMON.VISITORS}</span>
                                {/* <span className='px-1 busuanzi_container_site_pv hidden'>
                | <strong className='pl-1 busuanzi_value_site_pv font-medium'/>{locale.COMMON.VIEWS}</span> */}
                            </div>
                        </>
                    </div>
                </Tabs>
            </Card>

            {slot && <div className='flex justify-center'>
                {slot}
            </div>}
        </div>

    </aside>
}
export default SideAreaLeft
