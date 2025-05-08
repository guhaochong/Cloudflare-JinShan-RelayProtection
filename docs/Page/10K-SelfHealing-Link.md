# 10千伏 K型 自愈 链路表

::: tip 文档版本

> **`更新日期：2025.05.08`**

> **`文档版本号：25-0-1`**

:::

------

::: tip 文档目录 

[[TOC]]

:::

------
## 天刚 自愈系统
------
<Badge type="warning" text="主站：秦山" />
<Badge type="tip" text="装置：四方" />

::: code-group
```ts [秦山]
  A串           	   B串                    // [!code error]
   |                 |
秦17汇科甲          秦28汇科乙           // [!code warning]
```
```ts [汇科]
   |                 |
秦17汇科甲          秦28汇科乙           // [!code warning]
   |                 |
07汇11天钢甲联络    07汇12天钢乙联络           // [!code warning]
```
```ts [天钢]
  A串               B串                    // [!code error]
   |                 |
07汇11天钢甲联络    07汇12天钢乙联络            // [!code warning]
   |                 |
待定               // [!code warning]
```
```ts [自立]
  A串               B串                    // [!code error]
   |                 |
待定          // [!code warning]
   |                 |
贤24自立甲     		贤33自立乙          // [!code warning]
```
```ts [东贤]
  A串 (卫通)         B串 (东平)                    // [!code error]
   |                 |
贤24自立甲     		贤33自立乙      // [!code warning]
```
::: 



------
## 观唐 自愈系统
------
<Badge type="warning" text="主站：东平" />
<Badge type="tip" text="装置：欣能" />

::: code-group
```ts [东平]
  A串(东平)           B串（山阳）                    // [!code error]
   |                 |
东19金碧郦园甲       山13金碧郦园乙           // [!code warning]
```
```ts [金碧郦园]
   |                 |
东19金碧郦园甲        山13金碧郦园乙           // [!code warning]
   |                 |
77金11观唐嘉苑一号甲   77金12观唐嘉苑一号乙           // [!code warning]
```
```ts [观唐嘉园一号]
  A串               B串                    // [!code error]
   |                 |
77金11观唐嘉苑一号甲   77金12观唐嘉苑一号甲           // [!code warning]
   |                 |
04观1观唐嘉苑一号甲联络 04观2观唐嘉苑一号乙联络          // [!code warning]
```
```ts [观唐嘉园二号]
  A串               B串                    // [!code error]
   |                 |
04观1观塘唐苑一号甲联络 04观2观唐嘉苑一号乙联络          // [!code warning]
   |                 |
24皓3观唐嘉苑二号甲    24皓4观唐嘉苑二号乙           // [!code warning]
```
```ts [龙皓]
  A串               B串                    // [!code error]
   |                 |
24皓3观唐嘉苑二号甲    24皓4观唐嘉苑二号乙          // [!code warning]
   |                 |
卫2龙浩甲            东25龙皓乙           // [!code warning]
```
```ts [A串-卫通]	[B串-东平]
  A串 (卫通)         B串 (东平)                    // [!code error]
   |                 |
卫2龙皓甲            东25龙皓乙      // [!code warning]
```
::: 


------
## 君逸 自愈系统
------
<Badge type="warning" text="主站：东平" />
<Badge type="tip" text="装置：四方" />
::: code-group

```ts [东平]
  A串               B串                    // [!code error]
   |                 |
东13春满园甲        东23春满园乙           // [!code warning]
```
```ts [春满园]
  A串               B串                    // [!code error]
   |                 |
东13春满园甲        东23春满园乙           // [!code warning]
   |                 |
57满5君逸甲         57满6君逸乙           // [!code warning]
```
```ts [君逸]
  A串               B串                    // [!code error]
   |                 |
57满5君逸甲         57满6君逸乙           // [!code warning]
   |                 |
65思9君逸甲联络     65思10君逸乙联络           // [!code warning]
```
```ts [思致商业]
  A串               B串                    // [!code error]
   |                 |
65思9君逸甲联络     65思10君逸乙联络           // [!code warning]
   |                 |
卫20思致商业甲       卫3思致商业乙           // [!code warning]
```
```ts [卫通]
  A串               B串                    // [!code error]
   |                 |
卫20思致商业甲       卫3思致商业乙           // [!code warning]
```
::: 

------
## 海皓馨园 自愈系统
------
<Badge type="warning" text="主站：工农" />
<Badge type="tip" text="装置：欣能" />

::: code-group
```ts [东平]
  A串               B串                    // [!code error]
   |                 |
东10海悦馨苑甲       东24海悦馨苑乙           // [!code warning]
```
```ts [海悦馨苑]
  A串               B串                    // [!code error]
   |                 |
东10海悦馨苑甲       东24海悦馨苑乙           // [!code warning]
   |                 |
25海9海皓馨园甲      25海10海皓馨园乙           // [!code warning]
```
```ts [海皓馨园]
  A串               B串                    // [!code error]
   |                 |
25海9海皓馨园甲      25海10海皓馨园乙           // [!code warning]
   |                 |
60尚1海皓馨园甲联络  60尚6海皓馨园乙联络           // [!code warning]
```
```ts [海尚馨苑]
  A串               B串                    // [!code error]
   |                 |
60尚1海皓馨园甲联络  60尚6海皓馨园乙联络           // [!code warning]
   |                 |
01宏3海尚馨苑甲      01宏6海尚馨苑乙           // [!code warning]
```
```ts [宏阳新村]
  A串               B串                    // [!code error]
   |                 |
01宏3海尚馨苑甲      01宏6海尚馨苑乙           // [!code warning]
   |                 |
农16宏阳新村甲       农35宏阳新村乙           // [!code warning]
```
```ts [工农]
  A串               B串                    // [!code error]
   |                 |
农16宏阳新村甲       农35宏阳新村乙           // [!code warning]
```
::: 

------
## 巴洛美 自愈系统
------
<Badge type="warning" text="主站：金舸" />
<Badge type="tip" text="装置：欣能" />

::: code-group
```ts [蒋庄]
  A串               B串                    // [!code error]
   |                 |
庄19平业甲         庄23平业乙           // [!code warning]
```
```ts [平业]
  A串               B串                    // [!code error]
   |                 |
庄19平业甲         庄23平业乙           // [!code warning]
   |                 |
04巴7平业甲联络    04巴2平业乙联络           // [!code warning]
```
```ts [巴洛美]
  A串               B串                    // [!code error]
   |                 |
04巴7平业甲联络    04巴2平业乙联络           // [!code warning]
   |                 |
53浩11巴洛美甲     53浩12巴洛美乙           // [!code warning]
```
```ts [百浩]
  A串               B串                    // [!code error]
   |                 |
53浩11巴洛美甲     53浩12巴洛美乙           // [!code warning]
   |                 |
金25百浩甲         金31百浩乙           // [!code warning]
```
```ts [金舸]
  A串               B串                    // [!code error]
   |                 |
金25百浩甲          金31百浩乙           // [!code warning]
```
::: 

------
## 金仁 自愈系统
------
<Badge type="warning" text="主站：秀采" />
<Badge type="tip" text="装置：南瑞" />

::: code-group
```ts [秀采]
  A串               B串                    // [!code error]
   |                 |
采22金版甲         采44金版乙           // [!code warning]
```
```ts [金版]
  A串               B串                    // [!code error]
   |                 |
采22金版甲         采44金版乙           // [!code warning]
   |                 |
86版5金仁南甲      86版6金仁南乙           // [!code warning]
```
```ts [金仁南]
  A串               B串                    // [!code error]
   |                 |
86版5金仁南甲      86版6金仁南乙           // [!code warning]
   |                 |
14南11金仁甲联络   14南12金仁乙联络           // [!code warning]
```
```ts [金仁]
  A串               B串                    // [!code error]
   |                 |
14南11金仁甲联络   14南12金仁乙联络           // [!code warning]
   |                 |
65欣11金仁甲       65欣12金仁乙           // [!code warning]
```
```ts [欣峰]
  A串               B串                    // [!code error]
   |                 |
65欣11金仁甲       65欣12金仁乙           // [!code warning]
   |                 |
金23欣峰甲         金44欣峰乙           // [!code warning]
```
```ts [金舸]
  A串               B串                    // [!code error]
   |                 |
金23欣峰甲         金44欣峰乙           // [!code warning]
```
::: 

------
## 豪业 自愈系统
------
<Badge type="warning" text="主站：金舸" />
<Badge type="tip" text="装置：磐能" />

::: code-group
```ts [秀采]
  A串               B串                    // [!code error]
   |                 |
采14金争甲         采45金争乙           // [!code warning]
```
```ts [金争]
  A串               B串                    // [!code error]
   |                 |
采14金争甲         采45金争乙           // [!code warning]
   |                 |
52争11金姚甲       52争12金姚乙           // [!code warning]
```
```ts [金姚]
  A串               B串                    // [!code error]
   |                 |
52争11金姚甲       52争12金姚乙           // [!code warning]
   |                 |
85姚11豪业甲联络   85姚12豪业乙联络           // [!code warning]
```
```ts [豪业]
  A串               B串                    // [!code error]
   |                 |
85姚11豪业甲联络   85姚12豪业乙联络           // [!code warning]
   |                 |
08张1豪业甲        08张2豪业乙           // [!code warning]
```
```ts [张江高科]
  A串               B串                    // [!code error]
   |                 |
08张1豪业甲        08张2豪业乙           // [!code warning]
   |                 |
金22张江高科甲     金22张江高科乙           // [!code warning]
```
```ts [金舸]
  A串               B串                    // [!code error]
   |                 |
金22张江高科甲     金22张江高科乙           // [!code warning]
```
::: 

------
## 观湖名邸 自愈系统
------
<Badge type="warning" text="主站：工农" />
<Badge type="tip" text="装置：四方" />

::: code-group
```ts [工农]
  A串                   B串                    // [!code error]
   |                     |
农14旭新华庭一号甲        农33旭新华庭一号乙           // [!code warning]
```
```ts [旭新华庭一号]
  A串                   B串                    // [!code error]
   |                     |
农14旭新华庭一号甲        农33旭新华庭一号乙           // [!code warning]
   |                     |
21旭1旭新华庭二号甲       21旭2旭新华庭二号乙           // [!code warning]
```
```ts [旭新华庭二号]
  A串                   B串                    // [!code error]
   |                     |
21旭1旭新华庭二号甲       21旭2旭新华庭二号乙           // [!code warning]
   |                     |
01观11旭新华庭二号甲联络  01观12旭新华庭二号乙联络           // [!code warning]
```
```ts [观湖名邸]
  A串                   B串                    // [!code error]
   |                     |
01观11旭新华庭二号甲联络  01观12旭新华庭二号乙联络           // [!code warning]
   |                     |
87蔚5观湖名邸甲          87蔚8观湖名邸乙           // [!code warning]
```
```ts [蔚蓝]
  A串                   B串                    // [!code error]
   |                     |
87蔚5观湖名邸甲          87蔚8观湖名邸乙           // [!code warning]
   |                     |
申25蔚蓝甲               申38蔚蓝乙           // [!code warning]
```
```ts [申甬]
  A串                   B串                    // [!code error]
   |                     |
申25蔚蓝甲               申38蔚蓝乙           // [!code warning]
```
::: 
## 固废 自愈系统
------
<Badge type="warning" text="主站：金鸥" />
<Badge type="tip" text="装置：四方" />

::: code-group
```ts [金鸥]
  A串               B串                    // [!code error]
   |                 |
鸥15南环甲         鸥35南环乙           // [!code warning]
```
```ts [南环]
  A串               B串                    // [!code error]
   |                 |
鸥15南环甲         鸥35南环乙           // [!code warning]
   |                 |
87环9固废甲        87环10固废乙           // [!code warning]
```
```ts [固废]
  A串               B串                    // [!code error]
   |                 |
87环9固废甲        87环10固废乙           // [!code warning]
   |                 |
17固5奥威甲联络    17固6奥威乙联络           // [!code warning]
```
```ts [奥威]
  A串               B串                    // [!code error]
   |                 |
17固5奥威甲联络    17固6奥威乙联络           // [!code warning]
   |                 |
46庄11奥威甲       46庄12奥威乙           // [!code warning]
```
```ts [庄臣]
  A串               B串                    // [!code error]
   |                 |
46庄11奥威甲       46庄12奥威乙           // [!code warning]
   |                 |
91秋9庄臣甲        91秋10庄臣乙           // [!code warning]
```
```ts [秋实]
  A串               B串                    // [!code error]
   |                 |
91秋9庄臣甲        91秋10庄臣乙           // [!code warning]
   |                 |
虹36秋实甲         虹16秋实乙           // [!code warning]
```
```ts [海虹]
  A串               B串                    // [!code error]
   |                 |
虹36秋实甲         虹16秋实乙           // [!code warning]
```
::: 

------
## 龙湾东平 自愈系统
------
<Badge type="warning" text="主站：龙湾" />
<Badge type="tip" text="装置：南瑞" />

::: code-group
```ts [东平]
  A串               B串                    // [!code error]
   |                 |
东22金悦华庭甲      东15金悦华庭乙           // [!code warning]
```
```ts [金悦华庭]
  A串               B串                    // [!code error]
   |                 |
东22金悦华庭甲      东15金悦华庭乙           // [!code warning]
   |                 |
77悦9欧尚甲        77悦10欧尚乙           // [!code warning]
```
```ts [欧尚]
  A串               B串                    // [!code error]
   |                 |
77悦9欧尚甲        77悦10欧尚乙           // [!code warning]
   |                 |
82欧7文广甲联络    82欧8文广乙联络           // [!code warning]
```
```ts [文广]
  A串               B串                    // [!code error]
   |                 |
82欧7文广甲联络    82欧8文广乙           // [!code warning]
   |                 |
67地27文广甲      67地28文广乙联络           // [!code warning]
```
```ts [金天地二号]
  A串               B串                    // [!code error]
   |                 |
67地27文广甲       67地28文广乙联络           // [!code warning]
   |                 |
69联7金天地二号甲   69联8金天地二号乙           // [!code warning]
```
```ts [百联]
  A串               B串                    // [!code error]
   |                 |
69联7金天地二号甲   69联8金天地二号乙           // [!code warning]
   |                 |
龙12百联甲         龙44百联乙           // [!code warning]
```
```ts [龙湾]
  A串               B串                    // [!code error]
   |                 |
龙12百联甲         龙44百联乙           // [!code warning]
```
::: 

------
## 联系方式

------

> ### 金山继保 内部文件，禁止外传
>
> ### 如有疑问，请联系 18918632300 顾

------



## 更新说明

[2025.03.15]	启用 10千伏自愈链路表