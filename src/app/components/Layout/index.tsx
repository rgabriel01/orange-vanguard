import { Logout, RedShield, SettingsBurger } from '../Icons';

const Layout = ({
  children,
}) => {
  return (
    <>
      <div className='bg-gray-950 h-10 flex flex-wrap justify-between content-center flex-row px-1'>
        <div><SettingsBurger /></div>

        <div className='flex flex-wrap justify-between content-center flex-row gap-1'>
          <RedShield />
          <div>RedBase</div>
        </div>

        <div className='flex flex-wrap justify-between content-center flex-row gap-1'>
          <Logout />
          <div>Logout</div>
        </div>
      </div>
      {children}
    </>
  )
}

export default Layout
