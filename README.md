# Han's ToolBox
Han's sass 工具包使用說明

## folder structure 資料夾結構
 - base/ `基礎`  

    - reset.scss `CSS reset 檔案`  

 - helpers/ `工具區`  

    - variables.scss `專案的開發環境設定＆擺放變數`  

    - function.scss `一些計算用的函式`  

    - mixin.scss `放置共用的 ＠mixin`  

    - utilities.scss `參考 tailwindcss 自製的 utilities`  

 - layout/ `版面控制區`  

    - typography.scss `文字相關設定`  

    - grid.scss `grid 系統`  

 - components/ `元件區`  

    - custom components... `放一些自己做過不錯的客制化模組的元件`  

 - page/ `頁面樣式`  

    - custom.scss... `專案頁面的主要 scss 檔案`

## RWD mobile first v.s. PC first

在專案開始前請至變數設定檔`variables.scss`裡設定本專案的媒體查詢是手機優先還是電腦優先，如下：
```
$mediaFirst:mobile;
// $mediaFirst:pc; 預設是手機優先 所以pc會先註解掉
```
這個變數的設定會影響所有跟 RWD 有關的 @mixin ，很重要請務必確認。