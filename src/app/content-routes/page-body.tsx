import { Add, CheckBadge, Filter, Information } from '../components/Icons';
import { ButtonWithIcon } from '../components/Buttons';
import { Collapse } from 'antd';

const PageBody = () => {
  const items = [{
    key: '1',
    label: 'This is panel header 1',
    children: <p>mon</p>,
  }]
  return (
    <>
      <div className='mb-4 text-black flex content-center flex-row'>
        <div className='text-3xl'>Deal-A-Day</div>
        <div className='text-green-900'><CheckBadge classnames='h-10' /></div>
      </div>
      <div className='mb-4 text-black text-xl'>
        9 content routes
      </div>

      <div className='flex justify-between content-center flex-row'>
        <div>
          <ButtonWithIcon
            icon={<Filter />}
            text='Grouped by vSG'
            active={false}
          />
          <ButtonWithIcon
            icon={<Filter />}
            text='Grouped by app'
            active={false}
          />
          <ButtonWithIcon
            icon={<Filter />}
            text='Grouped by Tier 1'
            active={false}
          />
          <ButtonWithIcon
            icon={<Filter />}
            text='Ungrouped'
            active={true}
          />
        </div>

        <div className='text-black flex content-center flex-row gap-x-1 justify-items-center'>
          <Information classnames='h-10' />
          <div>
            <input
              type='text'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm w-full p-2.5'
              placeholder='Content route search'
            />
          </div>
          <div>
            <ButtonWithIcon
              icon={<Add />}
              text='Add new app'
              active={true}
            />
          </div>
        </div>
      </div>

      <Collapse items={items} defaultActiveKey={['1']} />
    </>
  )
}

export default PageBody;
