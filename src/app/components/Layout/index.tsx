import {
  ArrowsUpDown,
  Cog,
  Download,
  Logout,
  Lock,
  RedShield,
  Search,
  SettingsBurger,
  ServerStack,
  Shield,
  RectangleGroup,
} from '../Icons';

const Layout = ({
  children,
}) => {
  return (
    <>
      <div className='bg-gray-950 h-10 flex flex-wrap justify-between content-center flex-row px-1'>
        <div className='px-4'><SettingsBurger /></div>

        <div className='flex flex-wrap justify-between content-center flex-row gap-1'>
          <RedShield />
          <div>RedBase</div>
        </div>

        <div className='flex flex-wrap justify-between content-center flex-row gap-1 px-4'>
          <Logout />
          <div>Logout</div>
        </div>
      </div>

      <div className='flex content-center flex-row'>
        <div className='h-screen bg-slate-900'>
          <div className='flex flex-wrap flex-col gap-y-9 p-5 border-b-2 border-zinc-500'>
            <div className='cursor-pointer'><Search /></div>
            <div className='cursor-pointer'><Download /></div>
            <div className='cursor-pointer'><Lock /></div>
          </div>
          <div className='flex flex-wrap flex-col gap-y-9 p-5 border-b-2 border-zinc-500'>
            <div className='cursor-pointer'><ArrowsUpDown /></div>
            <div className='cursor-pointer'><Lock /></div>
            <div className='cursor-pointer'><ServerStack /></div>
            <div className='cursor-pointer'><RectangleGroup /></div>
            <div className='cursor-pointer'><Shield /></div>
          </div>
          <div className='flex flex-wrap flex-col gap-y-9 p-5 border-b-2 border-zinc-500'>
            <div className='cursor-pointer'><Cog /></div>
            <div className='cursor-pointer'><Cog /></div>
          </div>
          <div className='flex flex-wrap flex-col gap-y-9 p-5'>
            <div className='cursor-pointer'><Cog /></div>
            <div className='cursor-pointer'><Cog /></div>
          </div>
        </div>
        <div className='px-4 pt-12 w-full'>
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout
