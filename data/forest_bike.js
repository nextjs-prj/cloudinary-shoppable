var forest_bike = {
  shoppable: {
    transformation: {
      crop: "pad",
      aspect_ratio: "1",
    },
    products: [
      {
        productId: 1,
        productName: "Forest Bike",
        startTime: 7,
        endTime: 8,
        publicId:
          "https://res.cloudinary.com/dwbggi96z/image/upload/v1622914696/0efbcdf473436391b6a5a731a000fadc_rs6z0z.jpg",
        hotspots: [
          {
            time: "00:07",
            x: "50%",
            y: "80%",
            tooltipPosition: "left",
            clickUrl: "",
          },
        ],
        onClick: {
          action: "goto",
          pause: true,
          args: {
            url: "/product/forest_bike",
          },
        },
      },
      {
        productId: 1,
        productName: "Biking Gloves",
        startTime: 10,
        endTime: 11,
        publicId:
          "https://res.cloudinary.com/dwbggi96z/image/upload/v1622914746/716FjX82rLL._AC_UL1200__xvrznl.jpg",
        hotspots: [
          {
            time: "00:10",
            x: "30%",
            y: "80%",
            tooltipPosition: "right",
            clickUrl: "",
          },
        ],
        onClick: {
          action: "goto",
          pause: true,
          args: {
            url: "/product/bike_glove",
          },
        },
      },
    ],
  },
};

export default forest_bike;
