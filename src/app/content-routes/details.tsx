import { AddCircle, Delete, Pencil } from '../components/Icons';
import { BasicLabel } from '../components/Labels';
import { Table } from 'antd';

interface VirtualServer {
  cluster: string
  ports: number
  ip: string
  vs_name: string
  terminator_type: string
  ingress_traffic_type: string
}

interface DNS {
  name: string
  type: string
  ip_address: string
}

interface OriginServerGroup {
  name: string
  address: string
  port: number
}

interface DetailsProps {
  routeData: {
    name: string
    service_reference: string
    host_name: string
    pops: Array<string>
    spec: number
    locked: 'yes' | 'no'
    virtual_servers: VirtualServer[]
    tier: string
    origin_server_group: OriginServerGroup
    dns: DNS[]
  }
}

const Details = ({
  routeData
}: DetailsProps) => {
  const {
    name,
    service_reference,
    host_name,
    pops,
    spec,
    locked,
    virtual_servers,
    tier,
    origin_server_group,
    dns
  } = routeData;

  const virtualServerstableColumns = [
    {
      title: 'CLUSTER',
      dataIndex: 'cluster',
      key: 'cluster'
    },
    {
      title: 'PORTS',
      dataIndex: 'ports',
      key: 'ports'
    },
    {
      title: 'IP',
      dataIndex: 'ip',
      key: 'ip'
    },
    {
      title: 'VS NAME',
      dataIndex: 'vs_name',
      key: 'vs_name'
    },
    {
      title: 'TERMINATOR TYPE',
      dataIndex: 'terminator_type',
      key: 'terminator_type'
    },
    {
      title: 'INGRESS TRAFFIC TYPE',
      dataIndex: 'ingress_traffic_type',
      key: 'ingress_traffic_type'
    },
    {
      title: '',
      dataIndex: 'actions',
      key: 'actions',
      render: () => <Pencil classnames='h-4'/>
    },
  ]

  return (
    <div>
      <div className='w-32'><BasicLabel caption='Virtual Servers' /></div>
      <Table
        columns={virtualServerstableColumns}
        dataSource={virtual_servers}
        size='small'
        pagination={false}
      />

      <div className='flex content-center flex-row gap-3 mt-2 mb-2'>
        <div className='w-20'>
          <BasicLabel caption='Tier 1' />
        </div>
        {tier}
      </div>

      <div className='grid grid-cols-5 gap-3 mb-4' >
        <div className='text-xs text-gray-500'>CLUSTER</div>
        <div className='text-xs text-gray-500'>IP</div>
        <div className='text-xs text-gray-500'>PORT</div>
        <div className='text-xs text-gray-500'>TERMINATOR</div>
        <div className='text-xs text-gray-500'>INGRESS TRAFFIC TYPE</div>
      </div>

      <div className='grid grid-cols-3 gap-3'>
        <div>
          <div className='flex content-center flex-row gap-3 mb-2'>
            <div className='w-32'>
              <BasicLabel caption='Origin Server Group' />
            </div>
            {origin_server_group?.name}
          </div>

          <div className='grid grid-cols-3'>
            <div className='text-xs col-span-2'>
              <div className='text-gray-500'>ADDRESS</div>
              <div>{origin_server_group?.address}</div>
            </div>
            <div className='text-xs'>
              <div className='text-gray-500'>PORT</div>
              <div>{origin_server_group?.port}</div>
            </div>
          </div>
        </div>

        <div>
          <div className='flex content-center flex-row gap-3'>
            <div className='w-14'>
              <BasicLabel caption='DNS' />
            </div>
            <AddCircle />
          </div>

          {(dns ||[]).map(({name, type, ip_address}: DNS) => {
            return (
              <div className='grid grid-cols-4'>
                <div className='text-xs'>
                  <div className='text-gray-500'>NAME</div>
                  <div>{name}</div>
                </div>
                <div className='text-xs'>
                  <div className='text-gray-500'>TYPE</div>
                  <div>{type}</div>
                </div>
                <div className='text-xs'>
                  <div className='text-gray-500'>IP ADDRESS</div>
                  <div>{ip_address}</div>
                </div>
                <div>
                  <div/>
                  <div className='text-xs flex flex-row content-end'>
                    <Pencil classnames='h-4'/>
                    <Delete classnames='h-4'/>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div>
          <div className='flex content-center flex-row gap-3'>
            <div className='w-32'>
              <BasicLabel caption='Monitoring' />
            </div>
          </div>
          <div className='text-gray-500 text-xs'>MONITOR TYPE</div>
        </div>
      </div>

    </div>
  );
};

export default Details;
