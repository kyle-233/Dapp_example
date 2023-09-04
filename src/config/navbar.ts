interface navbarItemProps {
    /** 导航 */
    link: string
    /** 名称 */
    label: string
}

type navbarListsProps = navbarItemProps[]

const navbarLists: navbarListsProps = [
    {
        link: '/market',
        label: 'Market'
    }
]

export default navbarLists