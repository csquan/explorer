export default {
  home: {
    search: '搜索地址、区块、交易hash',
    banner: {
      node: '测试节点',
      block: '区块高度',
      trade: '过去一天交易数',
      count: '账户数量',
      tps: 'TPS/峰值'
    },
    charts: {
      trade: '过去14天交易数',
      address: '过去14天地址增长'
    },
    list: {
      block: {
        title: '区块',
        more: '查看全部',
        block_detail: {
          block: '区块',
          minutes: '分',
          second: '秒前',
          produced: '由矿工',
          trade: '交易',
          by: '于',
          time: '秒',
          reward: '区块奖励',
          eth: '以太币'
        }
      },
      trade: {
        title: '交易',
        more: '查看全部',
        trade_detail: {
          trade: '交易 #',
          from: '发送方',
          to: '接收方',
          num: '数额',
          time: '秒前',
          eth: '以太币'
        }
      }
    }
  },
  block: {
    title: '区块',
    detail: {
      high: '区块高度',
      status: {
        name: '状态',
        enter: '已确认',
        padding: '待确认'
      },
      time: {
        name: '时间戳',
        day: '天',
        hour: '小时',
        min: '分钟',
        second: '秒',
        ago: '前',
        trade: '交易'
      },
      hash: '哈希',
      f_hash: '父哈希',
      code: '节点',
      bit: '字节',
      num: '交易数量',
      size: '大小',
      copy: '复制'
    },
    trade: {
      title: '转账',
      hash: '哈希值',
      age: '年龄',
      from: '发送人',
      to: '接受人',
      num: '数量'
    },
    list: {
      high: '高度',
      age: '块龄',
      produced: '出块者',
      trade: '交易',
      bit: '字节'
    }
  },
  address: {
    title: '地址信息',
    detail: {
      address: '地址',
      name: '名称',
      trade: '转账',
      balance: '余额'
    },
    trade: {
      title: '转账',
      hash: '哈希值',
      age: '年龄',
      from: '发送人',
      to: '接受人',
      num: '数量',
      copy: '复制'
    }
  },
  trade: {
    title: '交易',
    detail: {
      status: '状态',
      type: {
        center: '已确定',
        padding: '待确定'
      },
      hash: '哈希',
      block: '区块',
      time: '时间',
      copy: '复制'
    },
    trade_detail: {
      trade: '交易信息',
      address: '地址间转账通证',
      from: '发送人',
      to: '接受人',
      num: '数量'
    },
    list: {
      hash: '交易 #',
      block: '区块',
      time: '创建时间',
      from: '发送人',
      to: '接受人',
      count: '价值'
    }
  },
  faucet: {
    title: '水龙头',
    des: '每个地址只能获取一次代币',
    search: '请输入测试网地址',
    register: '没有地址 去注册测试网地址',
    get: '获取'
  }

}
