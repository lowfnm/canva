import { ImageCategory, ImageCategoryTitle } from "@/types/Tabs";

const TAB_CATEGORIES: ImageCategory[] = [
  {
    title: ImageCategoryTitle.Photo,
    images: [
      {
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDZ8fHBvdG98ZW58MHx8fHwxNjg2NzM2MjYw&ixlib=rb-1.2.1&q=80&w=500",
        description:
          "A serene view of the ocean, where the waves gently kiss the shore under a bright blue sky.",
      },
      {
        src: "https://images.unsplash.com/photo-1519060825752-c4832f2d400a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWVzdGhldGljfGVufDB8fDB8fHww",
        description:
          "An aesthetically pleasing composition, blending vibrant colors and delicate patterns.",
      },
      {
        src: "https://images.unsplash.com/photo-1541359927273-d76820fc43f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D",
        description:
          "A captivating painting-like photo that evokes deep emotions and tells a story.",
      },
      {
        src: "https://images.unsplash.com/photo-1546471180-335a013cb87b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWVzdGhldGljfGVufDB8fDB8fHww",
        description:
          "A close-up of a beautiful flower, showcasing its intricate details and vibrant colors.",
      },
      {
        src: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D",
        description:
          "A picturesque sky painted in hues of blue and pink, creating a perfect backdrop for reflection.",
      },
      {
        src: "https://images.unsplash.com/photo-1592355591829-aaae33fcff1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D",
        description:
          "An inviting book resting on a cozy table, inviting readers into a world of stories and imagination.",
      },
      {
        src: "https://images.unsplash.com/photo-1601993957728-1e56ab70c5a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D",
        description:
          "A beautiful staircase leading to an unknown destination, inviting exploration and adventure.",
      },
      {
        src: "https://images.unsplash.com/photo-1523510468197-455cc987be86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D",
        description:
          "The enchanting colors of a sunset, where the sun bids farewell to the day.",
      },
      {
        src: "https://images.unsplash.com/photo-1547961547-321889bff29e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D",
        description:
          "A breathtaking sunset over the horizon, casting a warm glow across the landscape.",
      },
    ],
  },
  {
    title: ImageCategoryTitle.Brands,
    images: [
      {
        src: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJhbmR8ZW58MHx8MHx8fDA%3D",
        description:
          "An emblem representing innovation and quality in every detail.",
      },
      {
        src: "https://images.unsplash.com/photo-1531329466522-1075f0e4f23a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnJhbmR8ZW58MHx8MHx8fDA%3D",
        description:
          "A logo symbolizing elegance and a commitment to excellence.",
      },
      {
        src: "https://images.unsplash.com/photo-1508599589920-14cfa1c1fe4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJyYW5kfGVufDB8fDB8fHww",
        description:
          "A logo reflecting creativity and modern design, appealing to a youthful audience.",
      },
      {
        src: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJyYW5kfGVufDB8fDB8fHww",
        description:
          "An iconic logo known for its reliability and strong brand presence.",
      },
      {
        src: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJyYW5kfGVufDB8fDB8fHww",
        description: "A hallmark of quality and commitment to sustainability.",
      },
      {
        src: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJyYW5kfGVufDB8fDB8fHww",
        description:
          "A striking logo combining tradition and innovation in its design.",
      },
      {
        src: "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJyYW5kfGVufDB8fDB8fHww",
        description:
          "An embodiment of a legacy of craftsmanship and attention to detail.",
      },
      {
        src: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJyYW5kfGVufDB8fDB8fHww",
        description:
          "A representation of adventure and exploration in every product.",
      },
      {
        src: "https://images.unsplash.com/photo-1617566347924-ad5ebdaa014e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJyYW5kfGVufDB8fDB8fHww",
        description: "A testament to modern style and functionality.",
      },
    ],
  },
];

export { TAB_CATEGORIES };
