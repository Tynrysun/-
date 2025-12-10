import { Section, CategoryType } from './types';

export const curriculumData: Section[] = [
  {
    id: CategoryType.POSITION,
    title: "位置规律 (Position)",
    subtitle: "动态移动、静态结构",
    description: "考察图形元素在位置上的变化规律（动态）以及图形之间的结构关系（静态）。",
    priorityRule: "特征：元素组成相同看位置，图形间位置明显",
    rules: [
      {
        title: "动态位置：平移 (Translation)",
        content: "元素在网格或框架中沿直线方向移动。",
        tips: [
          "方向：横向、纵向、斜向",
          "步数：恒定、递增",
          "循环：到头后是否回到起点 (循环/反弹)",
          "经典背景：四宫格、九宫格、十六宫格"
        ],
        examples: [
          { type: "pos-trans", label: "平移", description: "按步数移动" },
          { type: "classic-grid-4", label: "宫格平移", description: "黑块在网格中移动" }
        ],
        realQuestions: [
          {
             imageType: "classic-grid-4",
             year: "2023 国考",
             analysis: "题干中黑块沿顺时针外圈移动，每次移动1格，选择下一个位置。"
          }
        ]
      },
      {
        title: "动态位置：旋转与翻转 (Rotation/Flip)",
        content: "元素围绕中心点旋转，或以某条线为轴进行翻转。",
        tips: [
          "旋转：顺时针/逆时针，角度 (45°, 90°, 180°)",
          "翻转：左右翻转 (轴对称)、上下翻转",
          "区分：翻转改变图案朝向，旋转不改变"
        ],
        examples: [
          { type: "pos-rot", label: "旋转", description: "时针方向旋转" },
          { type: "classic-sym-overall", label: "翻转/对称", description: "轴对称翻转" }
        ]
      },
      {
        title: "静态关系：连接性 (Connection)",
        content: "两个图形之间的连接方式。",
        tips: [
          "点连接：两个图形通过一个点或多个点接触 (如Classic 44)",
          "线连接：两个图形通过公共边接触",
          "包含关系：一个图形在另一个图形内部"
        ],
        examples: [
          { type: "pos-connect", label: "点连接", description: "图形仅在角/点处接触" },
          { type: "classic-intersecting-circles", label: "相交", description: "图形重叠连接" }
        ]
      },
      {
        title: "静态关系：相离与相切 (Structure)",
        content: "图形之间的空间位置关系。",
        tips: [
          "相离：图形分开，无接触",
          "相切：图形边缘接触 (切点)",
          "内含/外接：几何图形的嵌套关系"
        ],
        examples: [
          { type: "pos-struct", label: "相离", description: "图形完全分离" },
          { type: "tangent", label: "相切", description: "边缘接触" }
        ]
      }
    ]
  },
  {
    id: CategoryType.CLASSIC,
    title: "百大经典图形解析 (Top 100)",
    subtitle: "核心模型与高频考点",
    description: "基于《百大图形解析篇》整理的100个经典图形，按考点归类。熟记这些特征图可极大提高解题速度。",
    priorityRule: "看到特征图 -> 秒杀考点",
    rules: [
      // --- Group 1: Symmetry (1-5) ---
      {
        group: "一、图形规则类（对称图形）",
        title: "Classic 1-2: 对称性 (整体/局部)",
        content: "观察图形的整体对称性或局部对称性。",
        tips: ["整体轴对称/中心对称", "局部对称（如两个独立图形分别对称）"],
        examples: [
            { type: "classic-sym-overall", label: "整体对称", description: "轴对称" },
            { type: "classic-sym-partial", label: "局部对称", description: "对接图形" }
        ],
        realQuestions: [
            { imageType: "classic-sym-overall", year: "2022 联考", analysis: "题干图形均为轴对称图形，且对称轴方向依次顺时针旋转45度。" }
        ]
      },
      {
        group: "一、图形规则类（对称图形）",
        title: "Classic 3-4: 阴影与组对称",
        content: "阴影形状规则或成组出现时的对称规律。",
        tips: ["阴影部分本身对称", "3推3题型中，左右两组图形对称"],
        examples: [{ type: "classic-sym-shadow", label: "阴影对称", description: "阴影形状对称" }]
      },
      {
        group: "一、图形规则类（对称图形）",
        title: "Classic 5: 排列对称",
        content: "散点图或多个小元素排列呈现对称分布。",
        tips: ["元素位置对称", "整体轮廓对称"],
        examples: [{ type: "elements-distinct", label: "排列对称", description: "布局对称" }]
      },

      // --- Group 2: Protrusion (6-10) ---
      {
        group: "二、图形出头类（不完全封闭）",
        title: "Classic 6-8: 交叉与贯穿",
        content: "图形线条出现交叉、出头或贯穿。",
        tips: ["数交点", "一笔画", "贯穿圆内的线条数"],
        examples: [
            { type: "classic-protrusion-cross", label: "十字出头", description: "交点/笔画" },
            { type: "classic-protrusion-through", label: "圆贯穿", description: "圆内特征" }
        ]
      },
      {
        group: "二、图形出头类（不完全封闭）",
        title: "Classic 9-10: 开放与延伸",
        content: "开放图形的线条延伸方向或出头数量。",
        tips: ["延伸线的数量", "延伸方向 (顺/逆时针)"],
        examples: [{ type: "snake", label: "延伸线", description: "线条走向" }]
      },

      // --- Group 3: Closed Figures (11-15) ---
      {
        group: "三、封闭图形类（纯封闭图形）",
        title: "Classic 11-12: 面数量与同构",
        content: "纯封闭图形，重点考察面的数量及面的形状。",
        tips: ["面数量规律 (1,2,3,4...)", "面的形状是否相同 (同构面)"],
        examples: [
            { type: "faces-enclosed", label: "多面", description: "数面数量" },
            { type: "faces-divided", label: "同构面", description: "形状相似" }
        ]
      },
      {
        group: "三、封闭图形类（纯封闭图形）",
        title: "Classic 13-15: 悬空与阴影面",
        content: "图形内部元素悬空或包含阴影面。",
        tips: ["内外图形是否接触", "阴影面的面积/形状"],
        examples: [
            { type: "classic-fix-double-circle", label: "悬空", description: "内外不接触" },
            { type: "classic-sym-shadow", label: "阴影特征", description: "阴影分布" }
        ]
      },

      // --- Group 4: Connection/Separation (16-25) ---
      {
        group: "四、分离与连接类",
        title: "Classic 16-18: 连接方式",
        content: "图形间的连接关系：点连接、线连接、公共区域。",
        tips: ["点连接数", "公共边数量", "相交区域形状"],
        examples: [
            { type: "pos-connect", label: "点连接", description: "关键点连接" },
            { type: "classic-intersecting-circles", label: "相交", description: "公共区域" }
        ]
      },
      {
        group: "四、分离与连接类",
        title: "Classic 21-25: 分离与重组",
        content: "图形元素分离排列，或相同元素重组。",
        tips: ["部分数", "元素种类", "相同元素的遍历"],
        examples: [
            { type: "multi-part", label: "分离部分", description: "部分数" },
            { type: "elements-distinct", label: "元素重组", description: "遍历考法" }
        ]
      },

      // --- Group 5: Background/Grids (26-40) ---
      {
        group: "五、轮廓与背景类",
        title: "Classic 26-28: 宫格系统",
        content: "四宫格、九宫格、十六宫格背景下的移动。",
        tips: ["平移", "环形移动", "回字形移动"],
        examples: [
            { type: "classic-grid-4", label: "四宫格", description: "平移" },
            { type: "classic-grid-9", label: "九宫格", description: "环路移动" }
        ],
        realQuestions: [
            { imageType: "classic-grid-9", year: "2021 省考", analysis: "黑块在九宫格最外圈逆时针每次移动2格。" }
        ]
      },
      {
        group: "五、轮廓与背景类",
        title: "Classic 29-32: 特殊背景",
        content: "米字格、靶形图、放射状背景。",
        tips: ["沿半径移动", "旋转移动", "对称移动"],
        examples: [{ type: "classic-grid-target", label: "靶形/米字", description: "径向/旋转" }]
      },
      {
        group: "五、轮廓与背景类",
        title: "Classic 33-40: 路径与网格",
        content: "蜂窝网格、砖墙网格、S形传送带。",
        tips: ["特殊路径移动", "相邻格移动"],
        examples: [{ type: "snake", label: "路径模拟", description: "特定轨迹" }]
      },

      // --- Group 6: Black & White (41-50) ---
      {
        group: "六、黑白元素类",
        title: "Classic 41-45: 黑白分布",
        content: "黑白球或黑块的分布规律。",
        tips: ["黑白区域数", "黑白对称", "黑白一笔画"],
        examples: [
            { type: "classic-bw-grid", label: "黑白格", description: "定格分割" },
            { type: "classic-sym-overall", label: "对称分布", description: "黑白对称" }
        ]
      },
      {
        group: "六、黑白元素类",
        title: "Classic 46-50: 运算与叠加",
        content: "黑白叠加运算（黑+白=黑等）。",
        tips: ["定义运算", "去同存异/去异存同"],
        examples: [{ type: "classic-overlay", label: "叠加运算", description: "颜色变化" }]
      },

      // --- Group 7: Special Elements (51-60) ---
      {
        group: "七、特殊元素类",
        title: "Classic 51-53: 字符与数字",
        content: "汉字、字母、数字。",
        tips: ["笔画数", "封闭空间数", "直角/曲直性"],
        examples: [
            { type: "classic-char-cn", label: "汉字", description: "结构/笔画" },
            { type: "classic-char-en", label: "字母", description: "曲直/开口" }
        ]
      },
      {
        group: "七、特殊元素类",
        title: "Classic 54-60: 实物与螺旋",
        content: "生活实物图、螺旋线。",
        tips: ["部分数", "对称性", "螺旋线旋向/线段数"],
        examples: [
            { type: "classic-smiley", label: "实物", description: "部分/元素" },
            { type: "classic-spiral", label: "螺旋线", description: "旋向/线数" }
        ]
      },

      // --- Group 8: Composite/Complex (61-70) ---
      {
        group: "八、复合考法类",
        title: "Classic 61-65: 属性复合",
        content: "考察多个属性的结合，如对称+曲直。",
        tips: ["所有图形既是轴对称又是全曲线", "曲直交替"],
        examples: [{ type: "classic-s-curve", label: "对称+曲线", description: "多重属性" }]
      },
      {
        group: "八、复合考法类",
        title: "Classic 66-70: 数量复合",
        content: "考察数量规律的代换或计算。",
        tips: ["图1点数 + 图2点数 = 图3点数", "元素换算 (1圆=2方)"],
        examples: [{ type: "elements-distinct", label: "数量换算", description: "等量代换" }]
      },

      // --- Group 9: Graphic Correction/Features (71-100) ---
      {
        group: "九、图形修正类 (特征图)",
        title: "Classic 71-75: 圆与田字",
        content: "双相交圆、田字变形。",
        tips: ["相交圆一笔画", "田字变形两笔画/数面"],
        examples: [
            { type: "classic-fix-double-circle", label: "双圆", description: "一笔画特征" },
            { type: "classic-fix-tian", label: "田字", description: "两笔画" }
        ]
      },
      {
        group: "九、图形修正类 (特征图)",
        title: "Classic 81-85: 星号与井字",
        content: "五角星、井字。",
        tips: ["五角星一笔画", "井字四笔画"],
        examples: [
            { type: "classic-fix-star", label: "五角星", description: "一笔画" },
            { type: "classic-fix-well", label: "井字", description: "四笔画" }
        ]
      },
      {
        group: "九、图形修正类 (特征图)",
        title: "Classic 86-90: 箭头与三角形",
        content: "箭头、多三角形组合。",
        tips: ["箭头看方向/对称", "三角形数个数/平行线"],
        examples: [
            { type: "classic-arrow", label: "箭头", description: "指向/对称" },
            { type: "classic-triangle-mult", label: "三角组合", description: "数个数" }
        ]
      },
      {
        group: "九、图形修正类 (特征图)",
        title: "Classic 96-98: 同心圆与日字",
        content: "同心圆、日字变形。",
        tips: ["同心圆保留几层", "日字一笔画/曲直交点"],
        examples: [
            { type: "classic-concentric", label: "同心圆", description: "对称/切点" },
            { type: "classic-fix-sun", label: "日字", description: "一笔画" }
        ]
      },
      {
        group: "九、图形修正类 (特征图)",
        title: "Classic 99-100: 立体与展开",
        content: "立方体、四面体及其展开图。",
        tips: ["相对面排除法", "公共边分析", "时针法"],
        examples: [{ type: "classic-cube", label: "立体图", description: "空间重构" }],
        realQuestions: [
            { imageType: "classic-cube", year: "2023 联考", analysis: "根据相对面不相邻原则排除A、C，利用公共边指向判断B正确。" }
        ]
      }
    ]
  },
  {
    id: CategoryType.FACE,
    title: "数量规律 - 面 (Faces)",
    subtitle: "封闭空间、面的形状、最大/最小面",
    description: "面即封闭空间（窟窿）。图形被分割、白色窟窿明显时优先考虑数面。",
    priorityRule: "优先规律：面 — 笔画 — 点 — 线",
    rules: [
      {
        title: "面的数量",
        content: "数图形中封闭区间的个数（即空白部分）。注意：图形内部的黑色部分如果封闭也算面，但通常考查白色封闭区域。",
        tips: [
          "特征：生活化图形、粗线条图形中留白区域明显",
          "注意：连通的区域算一个面"
        ],
        examples: [
          { type: "faces-enclosed", label: "封闭空间", description: "数窟窿个数" }
        ]
      },
      {
        title: "细化考法：面的形状",
        content: "当面的数量无规律时，观察面的形状。例如所有面都是三角形、矩形，或者面的形状与外框一致。",
        tips: [
          "所有面形状相同（全三角、全方）",
          "是否存在特殊形状的面（如每幅图都有一个三角形）"
        ],
        examples: [
          { type: "faces-divided", label: "分割面", description: "观察分割后的形状" }
        ]
      },
      {
        title: "最大/最小面",
        content: "关注图形中面积最大或最小的面的形状、属性或与外框的关系。",
        tips: [
          "最大面是轴对称图形 / 中心对称图形",
          "最大面的边数（如3, 4, 5, 6...）",
          "最大面与外框形状是否相似"
        ],
        examples: [
          { type: "max-face-feature", label: "最大面特征", description: "关注最大区域的属性" }
        ]
      }
    ]
  },
  {
    id: CategoryType.STROKE,
    title: "数量规律 - 笔画 (Strokes)",
    subtitle: "一笔画、多笔画、奇点判定",
    description: "笔画数是数量规律中的高频难点。核心在于利用奇点数公式判断最少笔画数。",
    priorityRule: "笔画数 = 奇点数 ÷ 2 （奇点数必须为偶数）",
    rules: [
      {
        title: "奇点判定",
        content: "从一个点引出的线条数为奇数，则该点为奇点。端点也是奇点（引出1条线）！",
        tips: [
          "数出所有奇点，偶数线条的点忽略",
          "连通图的奇点数一定是偶数（0, 2, 4...）"
        ],
        examples: [
          { type: "cross-lines", label: "数线头", description: "T型交点(3线)是奇点" }
        ]
      },
      {
        title: "一笔画 (One Stroke)",
        content: "图形能否一笔画成（不抬笔、不回笔）。",
        tips: [
          "条件1：图形是连通的",
          "条件2：奇点数为 0 或 2",
          "典型图：五角星、'日'、'中'、圆相切"
        ],
        examples: [
          { type: "one-stroke-star", label: "一笔画", description: "五角星(0奇点)" },
          { type: "ri", label: "日字", description: "日字(2奇点)" }
        ]
      },
      {
        title: "多笔画",
        content: "最少笔画数 = 奇点数 ÷ 2。例如4个奇点需要2笔画完。",
        tips: [
          "常见两笔画：'田'字变形、同心圆+一条线",
          "图形有几个部分组成，且不连通，笔画数相加"
        ],
        examples: [
          { type: "tian", label: "田字", description: "4奇点 = 2笔画" },
          { type: "multi-part", label: "多部分", description: "不连通图形" }
        ]
      }
    ]
  },
  {
    id: CategoryType.POINT,
    title: "数量规律 - 点 (Points)",
    subtitle: "交点、切点、曲直交点",
    description: "数点的数量是图形推理中常见的基础考法。主要关注线条交叉明显、乱线一团的图形。",
    priorityRule: "特征：交叉线多、乱七八糟一团线",
    rules: [
      {
        title: "交点数",
        content: "统计线条之间交叉形成的点的数量。任何两条线的交叉处都算一个点。",
        tips: [
           "注意：端点通常不算交点，除非题目特殊",
           "乱七八糟一团线时，优先数交点"
        ],
        examples: [
          { type: "cross-lines", label: "线条交叉", description: "明显交叉点" }
        ]
      },
      {
        title: "曲直交点",
        content: "当图形中既有直线又有曲线，且曲直相交明显时，分别数“曲直交点”的数量。",
        tips: [
          "图形有曲有直，且曲直相交明显",
          "单独数曲线与直线相交的点（曲曲交点、直直交点不数）"
        ],
        examples: [
          { type: "curve-straight-intersect", label: "曲直交点", description: "圆与三角形相交" }
        ]
      },
      {
        title: "切点",
        content: "图形相切明显时，数切点的数量。",
        tips: [
          "圆与圆相切，或圆与直线相切",
          "常见于图群或包含圆形的题目"
        ],
        examples: [
          { type: "tangent", label: "切点", description: "圆内切/外切" }
        ]
      },
      {
        title: "框上/框内交点",
        content: "当所有图形都有外框，且内部线条与外框存在相交时，考虑分开数。",
        tips: [
          "框上交点：内部线条与外框的交点",
          "框内交点：内部线条互查的交点"
        ],
        examples: [
          { type: "frame-intersect", label: "位置关系", description: "关注点在框上的位置" }
        ]
      }
    ]
  },
  {
    id: CategoryType.LINE,
    title: "数量规律 - 线 (Lines)",
    subtitle: "直线、曲线",
    description: "线的考查分为直线数、曲线数。通常多边形数直线，全曲线图数曲线。",
    priorityRule: "特征：多边形、单一直线、全曲线图形",
    rules: [
      {
        title: "直线数",
        content: "统计图形中直线的数量。多边形或明显的折线图形优先考虑。",
        tips: ["多边形优先看直线数", "汉字笔画中的横、竖、撇、捺都算直线"],
        examples: [
          { type: "polygon-lines", label: "多边形", description: "数边数/直线数" }
        ]
      },
      {
        title: "曲线数",
        content: "统计图形中曲线的数量。全曲线图形优先考虑。",
        tips: [
          "注意：有的图形外框是圆滑的矩形，不算曲线",
          "单一的一条弧线算1条曲线"
        ],
        examples: [
          { type: "curve-lines", label: "曲线图", description: "数曲线条数" }
        ]
      },
      {
        title: "贪吃蛇 (Snake)",
        content: "一条线连到底，没有分叉，关注线的头尾方向或曲线的弯曲趋势。",
        tips: ["全直线：尾线方向", "有直有曲：曲线数量与位置"],
        examples: [
          { type: "snake", label: "一根线", description: "无分叉连续线条" }
        ]
      },
       {
        title: "线的平行与垂直",
        content: "关注线条的走向（横、竖、斜）以及是否存在平行关系。",
        tips: [
          "出现'='、'Z'字形或两个三角形规则摆放",
          "数平行线的组数"
        ],
        examples: [
          { type: "parallel", label: "平行线", description: "寻找平行关系" }
        ]
      }
    ]
  },
  {
    id: CategoryType.ANGLE,
    title: "数量规律 - 角 (Angles)",
    subtitle: "直角、锐角、钝角",
    description: "角的数量考查通常针对直角、锐角或钝角。折线图或多边形中常见。",
    priorityRule: "特征：出现直角、锯齿状折线、改造图",
    rules: [
      {
        title: "直角数",
        content: "统计图形中90度角的数量。",
        tips: [
          "特征：出现十字交叉、T型交叉、正方形、长方形",
          "注意：多边形内部的直角"
        ],
        examples: [
          { type: "right-angle", label: "直角", description: "明显的垂直关系" }
        ]
      },
      {
        title: "锐角/钝角数",
        content: "统计小于90度或大于90度的角。",
        tips: [
          "锯齿状图形、三角形",
          "通常考查锐角数量的情况较多"
        ],
        examples: [
          { type: "acute-angle", label: "锐角", description: "尖角数量" }
        ]
      }
    ]
  },
  {
    id: CategoryType.ELEMENT,
    title: "数量规律 - 素 (Elements)",
    subtitle: "元素种类、个数、部分数",
    description: "当图形由多个独立的小图形组成时，考察元素的种类和数量。",
    priorityRule: "特征：多个独立小图形、元素组成凌乱",
    rules: [
      {
        title: "元素种类与个数",
        content: "数图形中包含了几种元素，或者每种元素有几个。",
        tips: ["同种元素数量", "不同元素变换 (如 1圆 = 2方)"],
        examples: [
          { type: "elements-distinct", label: "多种元素", description: "圆、方、三角混合" }
        ]
      },
      {
        title: "部分数",
        content: "图形连通在一起算一部分，不连通算多部分。",
        tips: [
          "生活化图形（如汉字、图标）优先数部分数",
          "连通图部分数为1"
        ],
        examples: [
          { type: "multi-part", label: "离散图形", description: "数部分数" }
        ]
      }
    ]
  }
];