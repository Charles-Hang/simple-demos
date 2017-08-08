-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-08-11 05:22:32
-- 服务器版本： 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `news`
--
CREATE DATABASE IF NOT EXISTS `news` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `news`;

-- --------------------------------------------------------

--
-- 表的结构 `hundred`
--

CREATE TABLE `hundred` (
  `id` int(11) NOT NULL,
  `title` varchar(535) NOT NULL,
  `url` varchar(535) NOT NULL,
  `description` varchar(535) NOT NULL,
  `img1` varchar(535) NOT NULL,
  `img2` varchar(535) NOT NULL,
  `img3` varchar(535) NOT NULL,
  `time` date NOT NULL,
  `type` varchar(535) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `hundred`
--

INSERT INTO `hundred` (`id`, `title`, `url`, `description`, `img1`, `img2`, `img3`, `time`, `type`) VALUES
(1, '孙杨事件中国应改进两点：自揭禁赛家丑 提升药检', 'http://tiyudashengyi.baijia.baidu.com/article/576488', '', 'http://t11.baidu.com/it/u=2217410578,1778854750&fm=170&s=9781DB05365273D248BDC2CA030050A6&w=218&h=146&img.JPEG', 'http://t12.baidu.com/it/u=4284156398,2899914377&fm=170&s=0EA44C84505B01CE0E99B4080300F0C1&w=218&h=146&img.JPEG', 'http://t11.baidu.com/it/u=1213933486,1244239823&fm=170&s=17A1DB05365271D248BDC2CA030010B6&w=218&h=146&img.JPEG', '2016-08-08', ''),
(2, '许家印7头斗牛进场，王石和姚老板花容失色！', 'http://ytcj.baijia.baidu.com/article/576461', '', 'http://t10.baidu.com/it/u=152432367,2078757313&fm=170&s=6F659A460BE0AB6A4C450D9F03001082&w=218&h=146&img.PNG', '', '', '2016-08-09', '房地产人物'),
(3, '微信“付费订阅”终现，内容领域的冲击与变局', 'http://youcan.baijia.baidu.com/article/576347', '', 'http://t12.baidu.com/it/u=3230868458,170802850&fm=170&s=CBA1726E4D83E16C482E5253020070F9&w=218&h=146&img.JPEG', '', '', '2016-08-09', '微信'),
(4, '为什么说韩国游戏行业的整体制作水准要高于国内', 'http://qianjunyouxi.baijia.baidu.com/article/576339', '', 'http://t12.baidu.com/it/u=3593623643,1875526784&fm=170&s=BE3054874F5329D02E5F0BAC0300301A&w=218&h=146&img.JPEG', '', '', '2016-08-09', '游戏'),
(5, '亚马逊AWS与光环合作背后：面临无IDC牌照困境', 'http://skylei.baijia.baidu.com/article/576307', '', 'http://t11.baidu.com/it/u=2154072667,1591081694&fm=170&s=7DF506C685000EE156D1A43B0300D049&w=218&h=146&img.JPEG', '', '', '2016-08-09', 'Amazon'),
(6, 'Uber没死，滴滴没赢，出行市场好戏正当时', 'http://zhumobai.baijia.baidu.com/article/576196', '', 'http://t10.baidu.com/it/u=346618224,1148593145&fm=170&s=35BEE7361B2A469896CA65690300E03A&w=218&h=146&img.JPEG', 'http://t12.baidu.com/it/u=3103651046,2536983810&fm=170&s=14324C3257274B0D0AE025D20200C0F2&w=218&h=146&img.JPEG', 'http://t12.baidu.com/it/u=2272110059,1846259201&fm=170&s=22D35D92058348E808D400DC030050B2&w=218&h=146&img.JPEG', '2016-08-08', 'O2O'),
(7, '你，也认为Uber/滴滴是共享经济吗？', 'http://woshipm.baijia.baidu.com/article/576190', '', 'http://t10.baidu.com/it/u=2499104070,3688001701&fm=170&s=B8BA71958AD206D007A539260300A040&w=218&h=146&img.JPEG', 'http://t11.baidu.com/it/u=638540836,2933562161&fm=170&s=2800C410DDE0CD13C04170D2030090B0&w=218&h=146&img.PNG', 'http://t11.baidu.com/it/u=2461013320,1359931218&fm=170&s=4CA83C72795AC5CC4C4414CF0300F0B1&w=218&h=146&img.PNG', '2016-08-08', 'O2O'),
(8, '不用操心孙杨，因为他的冠军品质我们还没学会', 'http://chuangxin.baijia.baidu.com/article/575902', '', 'http://t10.baidu.com/it/u=3191324937,3268372083&fm=170&s=626029E04C1291D65ECD5C120300C080&w=218&h=146&img.JPEG', 'http://t12.baidu.com/it/u=1974291746,1071633086&fm=170&s=D0086FBE14C364FE12B8C0FB0300F033&w=218&h=146&img.JPEG', 'http://t12.baidu.com/it/u=2426495510,431941338&fm=170&s=C79210C610519473401FFB9103007088&w=218&h=146&img.JPEG', '2016-08-08', ''),
(9, '大数据的力量左右着今年美国大选', 'http://architech.baijia.baidu.com/article/575180', '被政客们当作武器的都是哪些类型的数据，这些数据又值多少钱呢。', 'http://t11.baidu.com/it/u=3074152165,3892632627&fm=170&s=BF2A6F81C4A1010B2111EDD00300C092&w=218&h=146&img.JPEG', '', '', '2016-08-08', '大数据'),
(10, '为什么说距离爱立信和诺基亚合并不足30个月？', 'http://kejizatan.baijia.baidu.com/article/575418', '', 'http://t10.baidu.com/it/u=1137185418,790945146&fm=170&s=B91B60944A856CCE49CE44C00300309A&w=218&h=146&img.JPEG', '', '', '2016-08-08', '华为'),
(11, '许家印7头斗牛进场，王石和姚老板花容失色！', 'http://ytcj.baijia.baidu.com/article/576461', '', 'http://t10.baidu.com/it/u=152432367,2078757313&fm=170&s=6F659A460BE0AB6A4C450D9F03001082&w=218&h=146&img.PNG', '', '', '2016-08-09', '房地产人物'),
(12, '微信“付费订阅”终现，内容领域的冲击与变局', 'http://youcan.baijia.baidu.com/article/576347', '', 'http://t12.baidu.com/it/u=3230868458,170802850&fm=170&s=CBA1726E4D83E16C482E5253020070F9&w=218&h=146&img.JPEG', '', '', '2016-08-09', '微信'),
(13, '为什么说韩国游戏行业的整体制作水准要高于国内', 'http://qianjunyouxi.baijia.baidu.com/article/576339', '', 'http://t12.baidu.com/it/u=3593623643,1875526784&fm=170&s=BE3054874F5329D02E5F0BAC0300301A&w=218&h=146&img.JPEG', '', '', '2016-08-09', '游戏'),
(14, '亚马逊AWS与光环合作背后：面临无IDC牌照困境', 'http://skylei.baijia.baidu.com/article/576307', '', 'http://t11.baidu.com/it/u=2154072667,1591081694&fm=170&s=7DF506C685000EE156D1A43B0300D049&w=218&h=146&img.JPEG', '', '', '2016-08-09', 'Amazon'),
(15, 'Uber没死，滴滴没赢，出行市场好戏正当时', 'http://zhumobai.baijia.baidu.com/article/576196', '', 'http://t10.baidu.com/it/u=346618224,1148593145&fm=170&s=35BEE7361B2A469896CA65690300E03A&w=218&h=146&img.JPEG', 'http://t12.baidu.com/it/u=3103651046,2536983810&fm=170&s=14324C3257274B0D0AE025D20200C0F2&w=218&h=146&img.JPEG', 'http://t12.baidu.com/it/u=2272110059,1846259201&fm=170&s=22D35D92058348E808D400DC030050B2&w=218&h=146&img.JPEG', '2016-08-08', 'O2O');

-- --------------------------------------------------------

--
-- 表的结构 `image`
--

CREATE TABLE `image` (
  `id` int(11) NOT NULL,
  `title` varchar(535) NOT NULL,
  `url` varchar(535) NOT NULL,
  `img` varchar(535) NOT NULL,
  `praise` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `image`
--

INSERT INTO `image` (`id`, `title`, `url`, `img`, `praise`) VALUES
(1, '宋代古塔裂两半 700年不倒', 'http://news.163.com/photoview/00AP0001/2190796.html', 'http://timg01.baidu-img.cn/timg?tc&size=b1056_594&sec=0&quality=100&cut_x=66&cut_y=0&cut_h=0&cut_w=1056&di=ba60e54df6ad497bf6edb9fe4f3c31f3&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fnews%2Fcrop%253D9%252C37%252C1189%252C594%2Fsign%3D2c0b32c3c3ef76092844c3df13e48fff%2F10dfa9ec8a136327422ff46d998fa0ec09fac7a9.jpg', 17),
(2, '千只皮卡丘现身日本街头吸引游客', 'http://finance.huanqiu.com/financepic/2016-08/2840915.html?from=bdtp', 'http://timg01.baidu-img.cn/timg?tc&size=b673_379&sec=0&quality=100&cut_x=42&cut_y=0&cut_h=0&cut_w=673&di=dad02d2fbc517dbd4e38c59ea2bcebe9&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fnews%2Fcrop%253D37%252C35%252C758%252C379%2Fsign%3Dd2fee4b19482d158afcd03f1bd392ef4%2F342ac65c10385343f805e57e9b13b07ecb8088a2.jpg', 5),
(3, '强风将1.7万公吨钻油台吹搁浅', 'http://photo.gmw.cn/2016-08/09/content_21383503.htm?from=bdsxx_gallery', 'http://timg01.baidu-img.cn/timg?tc&size=b705_397&sec=0&quality=100&cut_x=44&cut_y=0&cut_h=0&cut_w=705&di=66fd0965f679e3cfab2629343d93c6be&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fnews%2Fcrop%253D0%252C82%252C794%252C397%2Fsign%3D0bb1f751b93533fae1f9c96e95e3d127%2F5243fbf2b2119313a21781ef6d380cd791238d1c.jpg', 302),
(4, '游泳队连续爆发 孙杨获里约个人首金', 'http://news.163.com/photoview/00AN0001/2190859.html', 'http://timg01.baidu-img.cn/timg?tc&size=b688_387&sec=0&quality=100&cut_x=43&cut_y=0&cut_h=0&cut_w=688&di=f05dbc77fef613e212b35519e51f9f47&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fnews%2Fcrop%253D163%252C111%252C774%252C387%2Fsign%3D5d185fa13ed3d539d572558307b6df63%2Fe7cd7b899e510fb39bd608c8d133c895d0430ca5.jpg', 675),
(5, '巨额浪费？世界上被遗弃的奥运场馆', 'http://photo.gmw.cn/2016-08/09/content_21380170.htm?from=bdsxx_gallery', 'http://timg01.baidu-img.cn/timg?tc&size=b652_367&sec=0&quality=100&cut_x=40&cut_y=0&cut_h=0&cut_w=652&di=8c91756fd1d6d303b34abc08e0f375f9&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fnews%2Fcrop%253D46%252C197%252C734%252C367%2Fsign%3De54a5fb589cb39dbd58f3d16ed223f08%2Feaf81a4c510fd9f9efa46e362d2dd42a2834a439.jpg', 248),
(6, '完胜俄制T72！俄比赛中的我军96B坦克', 'http://photo.sina.cn/album_8_199_44388.htm?ch=8&fromsinago=1&page_start=1&page_end=100', 'http://timg01.baidu-img.cn/timg?tc&size=b608_342&sec=0&quality=100&cut_x=38&cut_y=0&cut_h=0&cut_w=608&di=7a0f34ec2cb868a531d4088a08f220d2&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fnews%2Fcrop%253D64%252C213%252C684%252C342%2Fsign%3D018d5d4b4aa7d933abe7be33907de53f%2F9213b07eca80653802e9c34c9fdda144ad348269.jpg', 7),
(7, '巴西男子里约热内卢基督像顶玩自拍', 'http://w.huanqiu.com/r/MV8wXzI4NDA4MzdfMzUyXzE0NzA2OTk3ODA=', 'http://timg01.baidu-img.cn/timg?tc&size=b647_364&sec=0&quality=100&cut_x=40&cut_y=0&cut_h=0&cut_w=647&di=9bedbc558fa435b6e80e22d2f55d33d2&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fnews%2Fcrop%253D17%252C90%252C728%252C364%2Fsign%3Dede83845ce5c1038303194828f20a43f%2F267f9e2f070828381b88e44bb099a9014d08f1e3.jpg', 121),
(8, '中国第四金 跳水男子双人十米台夺冠', 'http://photo.gmw.cn/2016-08/09/content_21374324.htm?from=bdsxx_gallery', 'http://timg01.baidu-img.cn/timg?tc&size=b659_371&sec=0&quality=100&cut_x=41&cut_y=0&cut_h=0&cut_w=659&di=f4e8661d592b2bf339db89ad8a37cb40&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fnews%2Fcrop%253D195%252C68%252C742%252C371%2Fsign%3D2044eb6f293fb80e189e3b970be0161b%2Faec379310a55b319ca69652b4ba98226cefc17df.jpg', 2880),
(9, '巴基斯坦一医院遭炸弹袭击致近百人人死亡', 'http://photo.gmw.cn/2016-08/09/content_21374457.htm?from=bdsxx_gallery', 'http://timg01.baidu-img.cn/timg?tc&size=b789_444&sec=0&quality=100&cut_x=49&cut_y=0&cut_h=0&cut_w=789&di=15b576782569d7b6c33a4d09d17fcfb8&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fnews%2Fcrop%253D3%252C62%252C888%252C444%2Fsign%3Dfd56c3565b43fbf2d163fc638d4de6b6%2F8601a18b87d6277fa525d46620381f30e924fcbd.jpg', 22),
(10, '把阿波罗11号登月照片拼起来我们会看见什么', 'http://tech.163.com/photoview/0AI20009/12508.html', 'http://timg01.baidu-img.cn/timg?tc&size=b448_252&sec=0&quality=100&cut_x=28&cut_y=0&cut_h=0&cut_w=448&di=160a3964b8e4534c9abb84e100658e1a&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fnews%2Fcrop%253D334%252C57%252C504%252C252%2Fsign%3Dd7e5e7f50b3b5bb5aa987abe0be0e60d%2Fdcc451da81cb39db492c8108d8160924aa183084.jpg', 306),
(11, '宋代古塔裂两半 700年不倒', 'http://news.163.com/photoview/00AP0001/2190796.html', 'http://timg01.baidu-img.cn/timg?tc&size=b1056_594&sec=0&quality=100&cut_x=66&cut_y=0&cut_h=0&cut_w=1056&di=ba60e54df6ad497bf6edb9fe4f3c31f3&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fnews%2Fcrop%253D9%252C37%252C1189%252C594%2Fsign%3D2c0b32c3c3ef76092844c3df13e48fff%2F10dfa9ec8a136327422ff46d998fa0ec09fac7a9.jpg', 17),
(12, '千只皮卡丘现身日本街头吸引游客', 'http://finance.huanqiu.com/financepic/2016-08/2840915.html?from=bdtp', 'http://timg01.baidu-img.cn/timg?tc&size=b673_379&sec=0&quality=100&cut_x=42&cut_y=0&cut_h=0&cut_w=673&di=dad02d2fbc517dbd4e38c59ea2bcebe9&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fnews%2Fcrop%253D37%252C35%252C758%252C379%2Fsign%3Dd2fee4b19482d158afcd03f1bd392ef4%2F342ac65c10385343f805e57e9b13b07ecb8088a2.jpg', 5),
(13, '巨额浪费？世界上被遗弃的奥运场馆', 'http://photo.gmw.cn/2016-08/09/content_21380170.htm?from=bdsxx_gallery', 'http://timg01.baidu-img.cn/timg?tc&size=b652_367&sec=0&quality=100&cut_x=40&cut_y=0&cut_h=0&cut_w=652&di=8c91756fd1d6d303b34abc08e0f375f9&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fnews%2Fcrop%253D46%252C197%252C734%252C367%2Fsign%3De54a5fb589cb39dbd58f3d16ed223f08%2Feaf81a4c510fd9f9efa46e362d2dd42a2834a439.jpg', 248);

-- --------------------------------------------------------

--
-- 表的结构 `local`
--

CREATE TABLE `local` (
  `id` int(11) NOT NULL,
  `title` varchar(535) NOT NULL,
  `url` varchar(535) NOT NULL,
  `description` varchar(535) NOT NULL,
  `img1` varchar(535) NOT NULL,
  `img2` varchar(535) NOT NULL,
  `img3` varchar(535) NOT NULL,
  `time` date NOT NULL,
  `type` varchar(535) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `local`
--

INSERT INTO `local` (`id`, `title`, `url`, `description`, `img1`, `img2`, `img3`, `time`, `type`) VALUES
(1, '钟丽缇宣布11月8日北京大婚 男方秘密筹备惊喜', 'http://fashion.67.com/wenku/2016/08/09/848690.html', '', 'http://t12.baidu.com/it/u=753158348,3984527063&fm=170&s=CBE323C6A60B3AF4F3D1FD1B030010D1&w=218&h=146&img.JPEG', '', '', '2016-08-09', '钟丽缇'),
(2, '韩国6名反“萨德”议员抵达北京，朴槿惠怒了！', 'http://m.anhuinews.com/html/2016/08/09/001214623.shtml', '与中国学者等各界人士讨论在中韩间引起巨大争议的“萨德”部署问题。', '', '', '', '2016-08-09', '大国元首'),
(3, '北京通州最严“双限”管不住这小产权楼盘 有人一次买5套', 'http://m.e23.cn/baidunews-eco/fangchan/2016-08-09/2016080900288.html', '北京市城市副中心的政策东风，让通州楼市扶摇直上。', '', '', '', '2016-08-09', '限购'),
(4, '北京10万/㎡以上豪宅3年激增13倍 都被谁买了？', 'http://finance.huanqiu.com/roll/2016-08/9285256.html', '已经有近四成的房源售价超过500万元。', '', '', '', '2016-08-09', ''),
(5, '万科养老试水市场化：3年重点布局10个城市！', 'http://news.dichan.sina.com.cn/2016/08/09/1209776.html', '万科养老部门计划与北京市国企北控集团在光熙门地区合作提供养老服务。', '', '', '', '2016-08-09', '万科'),
(6, '9日午后迎高温 傍晚不热宜散步', 'http://beijing.qianlong.com/2016/0809/819870.shtml', '气温下降较快又不是很闷热，比较有利于市民散步、跳舞等户外活动。', '', '', '', '2016-08-09', '高温'),
(7, '北京大姐怒骂中国不文明游客 网友直呼解气', 'http://news.youth.cn/sh/201608/t20160809_8523591.htm', '', 'http://t10.baidu.com/it/u=3742070862,3681581960&fm=170&s=2B008B4E3C711E9E318448B20300C091&w=218&h=146&img.JPEG', '', '', '2016-08-09', ''),
(8, '给七夕节泼冷水 支付宝推预约离婚服务', 'http://mobile.163.com/16/0809/15/BU1MNJHO001168BQ.html', '', 'http://t12.baidu.com/it/u=1029894983,2557916094&fm=170&s=F5B2379FCE31488A16C56C6E03007033&w=218&h=146&img.JPEG', '', '', '2016-08-09', '阿里巴巴'),
(9, '人和车均须京籍？网约车地方新政还须早合计', 'http://finance.17ok.com/news/325/2016/0809/2548074.html', '对于北京将为从事网约车设立户籍门槛的传言，不少业内人士都表示反对，认为可能性和可行性都有限。', '', '', '', '2016-08-09', ''),
(10, '99%北京人向往的生活，竟在这里', 'http://news.dichan.sina.com.cn/2016/08/09/1209740.html', '', 'http://t10.baidu.com/it/u=1787033442,742810295&fm=170&s=A9226F9310F93B846CA089640300E073&w=218&h=146&img.PNG', 'http://t12.baidu.com/it/u=3921801023,2383495063&fm=170&s=D97A9FF2866230A6D02940310300D047&w=218&h=146&img.PNG', 'http://t12.baidu.com/it/u=3680411339,1832967612&fm=170&s=037C5690224918E63E905C55030060F3&w=218&h=146&img.PNG', '2016-08-09', ''),
(11, '北京通州最严“双限”管不住这小产权楼盘 有人一次买5套', 'http://m.e23.cn/baidunews-eco/fangchan/2016-08-09/2016080900288.html', '北京市城市副中心的政策东风，让通州楼市扶摇直上。', '', '', '', '2016-08-09', '限购'),
(12, '北京10万/㎡以上豪宅3年激增13倍 都被谁买了？', 'http://finance.huanqiu.com/roll/2016-08/9285256.html', '已经有近四成的房源售价超过500万元。', '', '', '', '2016-08-09', ''),
(13, '钟丽缇宣布11月8日北京大婚 男方秘密筹备惊喜', 'http://fashion.67.com/wenku/2016/08/09/848690.html', '', 'http://t12.baidu.com/it/u=753158348,3984527063&fm=170&s=CBE323C6A60B3AF4F3D1FD1B030010D1&w=218&h=146&img.JPEG', '', '', '2016-08-09', '钟丽缇');

-- --------------------------------------------------------

--
-- 表的结构 `recommend`
--

CREATE TABLE `recommend` (
  `id` int(11) NOT NULL,
  `url` varchar(535) NOT NULL,
  `title` varchar(535) NOT NULL,
  `description` varchar(535) NOT NULL,
  `img1` varchar(535) NOT NULL,
  `img2` varchar(535) NOT NULL,
  `img3` varchar(535) NOT NULL,
  `time` date NOT NULL,
  `type` varchar(535) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `recommend`
--

INSERT INTO `recommend` (`id`, `url`, `title`, `description`, `img1`, `img2`, `img3`, `time`, `type`) VALUES
(1, 'http://news.sina.cn/2016-08-05/detail-ifxutfpc4512073.d.html?vt=4&wm=3200&sid=172021', '习近平关心的经济新动力', '上半年，经济是如何找到“换挡”动力的?', 'http://e.hiphotos.baidu.com/news/crop%3D9%2C8%2C381%2C250/sign=5daf91fdd943ad4bb2611c80bf3b7697/34fae6cd7b899e518b2f564c4aa7d933c9950dc0.jpg', '', '', '2016-08-05', '置顶'),
(2, 'http://sports.163.com/16/0808/07/BTUASF2K00050IMB.html', '男子举重56kg-龙清泉破世界纪录夺金', '龙清泉以抓举132公斤，挺举160公斤，总成绩292公斤夺得56KG级的冠军，然而他却因为状态...', '', '', '', '2016-08-08', '网易头条'),
(3, 'http://sports.163.com/16/0808/17/BTVC2F5F00050I18.html', '泳坛泥石流并不爱清流!傅园慧:宁泽涛不是我的菜', '', 'http://t11.baidu.com/it/u=114831469,3535393053&fm=170&s=E4303D9B091251ED1AC1F8D1010010B3&w=218&h=146&img.JPEG', 'http://t12.baidu.com/it/u=527371223,20149429&fm=170&s=B7927D8546A31AA45A81C9900300A092&w=218&h=146&img.JPEG', 'http://t10.baidu.com/it/u=4273400559,3262687199&fm=170&s=E7D05F94C36350AC2AF4D8D5030050B2&w=218&h=146&img.JPEG', '2016-08-08', '猜你喜欢'),
(4, 'https://2016.sina.cn/mib/baidu_olympic.d.html?docID=fxutfpc4849124', '孙杨夺冠双手指天大吼3声', '奥运会男子200米自由泳决赛中，孙杨夺冠。', 'http://f.hiphotos.baidu.com/news/q%3D100/sign=6c84cd948a8ba61ed9eecc2f713597cc/962bd40735fae6cda638603f07b30f2443a70fe4.jpg', '', '', '2016-08-09', '热点'),
(5, 'http://news.baidu.com/n?cmd=2&class=detail&article_id=1470708561724', '度秘直播：男篮小组赛中国vs法国', '度秘实况解说，奥运篮球赛事。', 'http://f.hiphotos.baidu.com/news/q%3D100/sign=a8d323aa59da81cb48e687cd6267d0a4/3812b31bb051f81983a5c814d2b44aed2f73e7e8.jpg', '', '', '2016-08-09', '热点'),
(6, 'http://3g.k.sohu.com/t/n152903996', '蒙冤入狱13年 “保姆投毒案”钱仁风获赔172万', '', 'http://t10.baidu.com/it/u=2905670295,2717848344&fm=170&s=900B2BF2DA3647AFC0808511030040DB&w=218&h=146&img.JPEG', '', '', '2016-08-09', '搜狐要闻'),
(7, 'http://lady.163.com/16/0809/10/BU151BOR00267VAG.html', '傅园慧PK霍顿 洪荒之力完胜心机冠军', '', 'http://t12.baidu.com/it/u=2175096605,3590934519&fm=170&s=6DD2488144B285D40875FD8B0300E081&w=218&h=146&img.PNG', '', '', '2016-08-09', '猜你喜欢'),
(8, 'http://d.youth.cn/tech_focus/201608/t20160809_8520278.html', '科技大事件：沃尔玛正式宣布以30亿美元收购美国电商Jet.com', '', 'http://b.hiphotos.baidu.com/news/q%3D100/sign=62ab98b7851001e9483c100f880f7b06/6d81800a19d8bc3e7052d7948a8ba61ea8d34512.jpg', '', '', '2016-08-09', '热点'),
(9, 'http://news.163.com/16/0809/08/BU0V9AMF00014SEH.html', '百度云信任危机:存储资料无故蒸发 塞满淫秽视频', '百度云建议用户将账号绑定手机，当收到账号异常登录短信后一定要在第一时间修改密码，而密码的复杂程...', '', '', '', '2016-08-09', '网易要闻'),
(10, 'http://2016.sina.com.cn/zq/us/2016-08-09/doc-ifxutfpc4852566.shtml', '俄罗斯电视台：菲尔普斯拔火罐和服禁药没区别 ', '', 'http://t12.baidu.com/it/u=980340542,1722455069&fm=170&s=A8987F9452816B452E18E1E003000063&w=218&h=146&img.JPEG', '', '', '2016-08-09', ''),
(11, 'http://news.sina.cn/2016-08-05/detail-ifxutfpc4512073.d.html?', '习近平关心的经济新动力', '上半年，经济是如何找到“换挡”动力的?', 'http://e.hiphotos.baidu.com/news/crop%3D9%2C8%2C381%2C250/sign=5daf91fdd943ad4bb2611c80bf3b7697/34fae6cd7b899e518b2f564c4aa7d933c9950dc0.jpg', '', '', '2016-08-05', '置顶'),
(13, 'http://sports.163.com/16/0808/07/BTUASF2K00050IMB.html', '男子举重56kg-龙清泉破世界纪录夺金', '龙清泉以抓举132公斤，挺举160公斤，总成绩292公斤夺得56KG级的冠军，然而他却因为状态...', '', '', '', '2016-08-08', '网易头条'),
(14, 'http://sports.163.com/16/0808/17/BTVC2F5F00050I18.html', '泳坛泥石流并不爱清流!傅园慧:宁泽涛不是我的菜', '', 'http://t11.baidu.com/it/u=114831469,3535393053&fm=170&s=E4303D9B091251ED1AC1F8D1010010B3&w=218&h=146&img.JPEG', 'http://t12.baidu.com/it/u=527371223,20149429&fm=170&s=B7927D8546A31AA45A81C9900300A092&w=218&h=146&img.JPEG', 'http://t10.baidu.com/it/u=4273400559,3262687199&fm=170&s=E7D05F94C36350AC2AF4D8D5030050B2&w=218&h=146&img.JPEG', '2016-08-08', '猜你喜欢'),
(15, 'https://2016.sina.cn/mib/baidu_olympic.d.html?docID=fxutfpc4849124', '孙杨夺冠双手指天大吼3声', '奥运会男子200米自由泳决赛中，孙杨夺冠。', 'http://f.hiphotos.baidu.com/news/q%3D100/sign=6c84cd948a8ba61ed9eecc2f713597cc/962bd40735fae6cda638603f07b30f2443a70fe4.jpg', '', '', '2016-08-09', '热点'),
(16, 'http://3g.k.sohu.com/t/n152903996', '蒙冤入狱13年 “保姆投毒案”钱仁风获赔172万', '', 'http://t10.baidu.com/it/u=2905670295,2717848344&fm=170&s=900B2BF2DA3647AFC0808511030040DB&w=218&h=146&img.JPEG', '', '', '2016-08-09', '搜狐要闻'),
(17, 'http://d.youth.cn/tech_focus/201608/t20160809_8520278.html', '科技大事件：沃尔玛正式宣布以30亿美元收购美国电商Jet.com', '', 'http://b.hiphotos.baidu.com/news/q%3D100/sign=62ab98b7851001e9483c100f880f7b06/6d81800a19d8bc3e7052d7948a8ba61ea8d34512.jpg', '', '', '2016-08-09', '热点');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hundred`
--
ALTER TABLE `hundred`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `local`
--
ALTER TABLE `local`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recommend`
--
ALTER TABLE `recommend`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `hundred`
--
ALTER TABLE `hundred`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- 使用表AUTO_INCREMENT `image`
--
ALTER TABLE `image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- 使用表AUTO_INCREMENT `local`
--
ALTER TABLE `local`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- 使用表AUTO_INCREMENT `recommend`
--
ALTER TABLE `recommend`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
