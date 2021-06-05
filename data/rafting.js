var rafting = {
  shoppable: {
    transformation: {
      crop: "pad",
      aspect_ratio: "1",
    },
    products: [
      {
        productId: 1,
        productName: "Raft",
        startTime: 12,
        endTime: 13,
        publicId:
          "https://res.cloudinary.com/dwbggi96z/image/upload/v1622914429/nrs-large-raft2-1400x788_nmjiow.jpg",
        hotspots: [
          {
            time: "00:13",
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
            url: "/product/raft",
          },
        },
      },
      {
        productId: 2,
        productName: "Paddler",
        startTime: 15,
        endTime: 16,
        publicId:
          "https://res.cloudinary.com/dwbggi96z/image/upload/v1622914410/77106_01_full_062613_1000x1000_dvtvqd.jpg",
        hotspots: [
          {
            time: "00:16",
            x: "30%",
            y: "80%",
            tooltipPosition: "left",
            clickUrl: "",
          },
        ],
        onClick: {
          action: "goto",
          pause: true,
          args: {
            url: "/product/raft_paddler",
          },
        },
      },
      {
        productId: 3,
        productName: "Life Jacket",
        startTime: 22,
        endTime: 24,
        publicId:
          "https://res.cloudinary.com/dwbggi96z/image/upload/v1622914385/x-treme-raft_ff6ggn.jpg",
        hotspots: [
          {
            time: "00:22",
            x: "70%",
            y: "70%",
            tooltipPosition: "left",
            clickUrl: "",
          },
        ],
        onClick: {
          action: "goto",
          pause: true,
          args: {
            url: "/product/life_jacket",
          },
        },
      },
      {
        productId: 4,
        productName: "Helmet",
        startTime: 32,
        endTime: 33,
        publicId:
          "https://res.cloudinary.com/dwbggi96z/image/upload/v1622914411/download_tji0tf.jpg",
        hotspots: [
          {
            time: "00:32",
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
            url: "/product/raft_helmet",
          },
        },
      },
    ],
  },
};
// raft
// lifejacket
// paddlers
// helmet
export default rafting;
