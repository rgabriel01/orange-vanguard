"use client"

import { Add, CheckBadge, Filter, Information, Lock, VerticalEllipsis } from '../components/Icons';
import { ButtonWithIcon } from '../components/Buttons';
import { Table } from 'antd';
import Details from './details';

const PageBody = () => {
  const mockHeaderData = [
    {
      name: 'RS-2024-1010-CR21',
      service_reference: 'RS-2024-1010',
      host_name: 'mfa.redshield.co',
      pops: ['OHI1', 'ORE1'],
      spec: 1.0,
      locked: 'yes',
      virtual_servers: [
        {
          cluster: 'OHI1',
          ports: 11144,
          ip: '10.176.21.40',
          vs_name: 'RS-2024-1010-CR21_redir_vs',
          terminator_type: 'HTTPS Redirect',
          ingress_traffic_type: 'ALB'
        },
        {
          cluster: 'OHI1',
          ports: 11145,
          ip: '10.176.21.40',
          vs_name: 'RS-2024-1010-CR21_vs',
          terminator_type: 'Standard (HTTPS)',
          ingress_traffic_type: 'ALB'
        },
        {
          cluster: 'ORE1',
          ports: 11144,
          ip: '10.112.29.40',
          vs_name: 'RS-2024-1010-CR21_redir_vs',
          terminator_type: 'HTTPS Redirect',
          ingress_traffic_type: 'ALB'
        },
        {
          cluster: 'ORE1',
          ports: 11145,
          ip: '10.176.29.40',
          vs_name: 'RS-2024-1010-CR21_vs',
          terminator_type: 'Standard (HTTPS)',
          ingress_traffic_type: 'ALB'
        },
      ],
      tier: 'RS-2020-1010-T1-4',
      origin_server_group: {
        name: 'RS-2024-1010-CR21_pool',
        address: '52.9.238.76',
        port: 80,
      },
      dns: [
        {
          name: 'mfa.redshield.co',
          type: 'A',
          ip_address: '52.223.44.65'
        },
        {
          name: 'mfa.redshield.co',
          type: 'A',
          ip_address: '99.83.220.14'
        },
      ]
    },
    {
      name: 'RS-2024-1010-BB21',
      service_reference: 'RS-2024-2002',
      host_name: 'mfa.redshield.co',
      pops: ['OHI1'],
      spec: 1.0,
      locked: 'yes',
      virtual_servers: [],
      tier: 'RS-2020-1010-T1-4',
      origin_server_group: {},
    },
    {
      name: 'RS-2024-1010-CC21',
      service_reference: 'RS-2024-4232',
      host_name: 'mfa.redshield.co',
      pops: ['OHI1'],
      spec: 1.0,
      locked: 'yes',
      virtual_servers: [],
      tier: 'RS-2020-1010-T1-4',
      origin_server_group: {},
    },
  ]

  const tableColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Service reference',
      dataIndex: 'service_reference',
      key: 'service_reference'
    },
    {
      title: 'Host names',
      dataIndex: 'host_name',
      key: 'host_name'
    },
    {
      title: 'PoPs',
      dataIndex: 'pops',
      key: 'pops',
      render: (value) => (value || []).join(', ')
    },
    {
      title: 'Spec',
      dataIndex: 'spec',
      key: 'spec'
    },
    {
      align: 'center',
      title: <Lock />,
      dataIndex: 'locked',
      key: 'locked'
    },
    {
      title: '',
      key: 'actions',
      render: () => <VerticalEllipsis />
    },
  ]

  return (
    <>
      <div className='mb-4 text-black flex content-center flex-row'>
        <div className='text-3xl'>Deal-A-Day</div>
        <div className='text-green-900'><CheckBadge classnames='h-10' /></div>
      </div>

      <div className='mb-4 text-black text-xl'>
        {`${mockHeaderData.length} content routes`}
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

      <div>
        <Table
          rowKey={(record) => record.name}
          columns={tableColumns}
          expandable={{expandedRowRender: (record) => <Details routeData={record} /> }}
          dataSource={mockHeaderData}
          pagination={false}
        />
      </div>
    </>
  )
}

export default PageBody;
