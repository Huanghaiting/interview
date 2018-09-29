//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538205271722&di=d2fee0de8e2c1301741924e3478a1316&imgtype=0&src=http%3A%2F%2Fi2.img.969g.com%2Fnews%2Fimgx2015%2F04%2F08%2F322_174015_788e1.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538205271721&di=ca001c090c8e6e6f83827d1537491c03&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F37d3d539b6003af3e83a6ab8322ac65c1138b662.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538205271721&di=2fa1224cd33dafcf41800fa755f2b6bf&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F17%2F53%2F16%2F68J58PICARD_1024.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    prolist: [
      {
        logo:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538800545&di=0415ca91d1a5f4e9ec0785eea4d9470a&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0199be56f3c06432f875a94411c7db.png%401280w_1l_2o_100sh.png',
        title:'小黄人吃球球1',
        des:'“让我们努力成为一个胖子”',
        btn:'开始'

      },
      {
        logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538207281125&di=6beebc5f26752bedc212456556730a7f&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01c9915a2a3a66a801216e8ddf892a.png%402o.png',
        title: '奇幻精灵2',
        des: '“抓住奇幻的尾巴”',
        btn: '开始'

      },
      {
        logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538207332283&di=cfc9154db17262d7878f916d2e0e3ab4&imgtype=0&src=http%3A%2F%2Fwww.sj520.cn%2FUploadFile%2F20160322094820235.jpg',
        title: '保卫萝卜大作战3',
        des: '“守卫家园”',
        btn: '开始'

      },
      {
        logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538802118&di=eef6eb5b34500affda52df253a38ebfa&imgtype=jpg&er=1&src=http%3A%2F%2Fimg03.muzhiwan.com%2F2015%2F03%2F25%2Fhr.coreaplikacije.tennis_109514%2F551265487a624.png',
        title: '网球大作战4',
        des: '“决一胜负”',
        btn: '开始'

      },
      {
        logo: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3842465330,2766893896&fm=26&gp=0.jpg',
        title: '仙侠奇缘5',
        des: '“成为一代大侠”',
        btn: '开始'

      },

    ],

  },
  clickMe: function () {
    var arr = [];
    arr = this.data.prolist;
    for (var i = -1; i < arr.length; i++) {
      var a = arr.shift(0);
      arr.push(a);
    }
    this.data.prolist = arr;
    this.setData({
      'prolist': this.data.prolist
    });
  },
 
})
