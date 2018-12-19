<template>
  <div id="navi">
    <div id="allmap"></div>
  </div>
</template>
<script>
var baiduMap;
export default {
  name: "Navi",
  data() {
    return {
      city: ""
    };
  },
  methods: {
    initMap() {
      baiduMap = new BMap.Map("allmap");
      const point = new BMap.Point(116.404, 39.915);
      baiduMap.centerAndZoom(point, 15);
      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(
        function(r) {
          if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            console.log(r);
            var mk = new BMap.Marker(r.point);
            baiduMap.addOverlay(mk);
            baiduMap.panTo(r.point);
            alert(
              "您的位置：" +
                r.address.city +
                "," +
                r.point.lng +
                "," +
                r.point.lat
            );
          } else {
            alert("failed" + this.getStatus());
          }
        },
        { enableHighAccuracy: true }
      );
    }
  },
  mounted() {
    this.initMap();
  }
};
</script>
<style lang="scss" scoped>
#allmap {
  width: 100%;
  height: 300px;
}
</style>