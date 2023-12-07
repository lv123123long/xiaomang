const poker = {
    imgs: [],                                                     // 存放图片元素的数组
    img_index: 0,                                                 // 当前图片下标，默认是 0
    poker_eles: {},                                               // 存放扑克牌元素对象的空对象
    transform_datas: [                                            // 存储变换数据的数组，用于实现动画效果
        "rotate(-10deg)",
        "rotate(-6deg) translate(35%, -12%)",
        "rotate(-2deg) translate(65%, -19%)",
        "rotate(2deg) translate(95%, -26%)",
        "rotate(6deg) translate(125%, -23%)",
    ],
    init() {                                                        // 初始化方法，用于加载图片，获取扑克牌元素，并设置元素的nums属性
        for (let i = 0; i < 9; i++) {                        
            let img = new Image();
            img.src = `./photos/photo (${i}).webp`;
            this.imgs.push(img);
        }
        this.poker_eles = [...document.getElementsByClassName("poker")];
        this.poker_eles.forEach((obj, index) => {
            obj.nums = index;
        });

        this.img_index = this.poker_eles.length;
    },
    move() {                                                         // 移动方法，用于移动扑克牌元素，切换图片并实现动画效果
        this.poker_eles.map((ele) => {
            let nums = ele.nums;
            if (nums + 1 >= this.poker_eles.length) {
                nums = 0;
                ele.style.transition = "";
                ele.querySelector("img").src =
                    this.imgs[this.img_index].src;
                this.img_index++;
                if (this.img_index >= this.imgs.length)
                    this.img_index = 0;
            } else {
                nums += 1;
                ele.style.transition = "transform 0.3s ease";
            }
            ele.style.zIndex = nums;
            ele.style.transform = this.transform_datas[nums];
            ele.nums = nums;
        });
    },
};
poker.init();    // 初始化poke对象，加载图片并设置扑克牌元素的nums元素