Page({
  date: {
    groupList: [],
  },
  onLoad: function (e) {
    wx.cloud
      .callFunction({
        name: "quickstarFunctions",
        data: {
          type: "getManyGroup",
        },
      })
      .then((res) => {
        this.setData({
          groupList: res.result.groupList,
        });
      });
  },
});
