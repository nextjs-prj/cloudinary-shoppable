var sea_turtle = {
  shoppable: {
    showPostPlayOverlay: true,
    transformation: {
      crop: "pad",
      aspect_ratio: "1",
    },
    products: [
      {
        productId: 1,
        productName: "Sea Turtle",
        startTime: 6,
        endTime: 7,
        publicId:
          "https://res.cloudinary.com/dwbggi96z/image/upload/v1622914620/Screenshot_2021-06-05_at_18.36.28_ws0rgm.png",
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
            url: "/product/sea_turtle",
          },
        },
      },
    ],
  },
};

export default sea_turtle;
