var tipuesearch = {"pages":[{"title":"Sentaurus TCAD 2017.9虚拟机使用","url":"/2023/01/05/Sentaurus-TCAD/","text":"网盘链接 网盘：www.baidu.com 账号密码 普通用户： 账号：sentaurus 密码：123456 Root用户： 账号：root 密码：root 使用方法（必看） 推荐Bash中每条指令前都加上sudo。 每次开机、重启后（挂起的虚拟机不需要）必须先执行[1][2]： 1sudo lmgrd 之后可以使用swb或sudo swb打开软件。 启动SDE是必须是[3]： 1sudo sde 这条命令是开启license管理软件，否则执行swb会报错：lmgrd未启动 ↩︎ 必须加上sudo,否则会报错(mgrd) Failed to open the TCP port number in the license.如果依然报错参考知乎教程👉点我 ↩︎ 必须sudo，否则打开模型时会卡退。 ↩︎","tags":"tcad"},{"title":"XIAO使用手册","url":"/2023/01/05/using-of-XIAO/","text":"编译命令使用的工具链为RISC-V Embedded GCC V1.4，是MounRiver Studio自带的工具链。 不使用标准库-nostdlib可以更好的调试SOC 未开启优化（推荐）1riscv-none-embed-gcc -march=rv32i -mabi=ilp32 --specs=nosys.specs -nostdlib -msmall-data-limit=8 -mno-save-restore -fmessage-length=0 -fsigned-char -ffunction-sections -fdata-sections -Wunused -Wuninitialized -g -std=gnu99 -MMD -MP .\\xxx.c -o .\\xxx.o -Ttext 00000000 开启优化1riscv-none-embed-gcc -march=rv32i -mabi=ilp32 --specs=nosys.specs -nostdlib -msmall-data-limit=8 -mno-save-restore -Os -fmessage-length=0 -fsigned-char -ffunction-sections -fdata-sections -Wunused -Wuninitialized -g -std=gnu99 -MMD -MP .\\xxx.c -o .\\xxx.o -Ttext 00000000","tags":"risc-v xiao"},{"title":"XIAO设计手册","url":"/2023/01/04/XIAO/","text":"XIAO一款基于RV32I指令集的五级流水线处理器，具有中断处理、异常恢复、外设控制等多种功能。 GitHub链接： 暂未Public XIAO设计记录NOTES2022.12.6 完成RV32I单周期处理器①设计目前支持的指令：RV32I(除CSR、exxx、fence十条指令外) BUGS单周期处理器①： 2022.12.4 ram和reg的时钟频率是指令时钟的2倍，会导致指令时钟上升沿时也写入了数据。时钟相同频率 或者反向时钟均无法修复。 TO DO 优化处理器结构：用controler控制ALU等；加法器合并进ALU. 总线、外设； 流水线； 中断、异常；","tags":"risc-v xiao"},{"title":"标签","url":"/tags/index.html","text":"","tags":""},{"title":"分类","url":"/categories/index.html","text":"","tags":""}]}