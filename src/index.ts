/**
 * @Description: 配置命令
 * @Author: Auspicious
 * @Email: <18437980785@163.com>
 * @Date: 2020/7/1 09:48
 * @LastEditors: missagril
 */
import {program} from "commander";
import * as shell from 'shelljs';

program
    .command("version")
    .description('current version')
    .action(() => {
        console.log("current version 1.0.0");
    });

program
    .arguments("<path> [type]")
    .description("The path of the file or folder to open . w for webstorm and c for vscode")
    .action((path: string, type: 'w' | 'c' = 'w') => {
        if (type === 'w') {
            shell.exec(`open -a webstorm ${path}`);
        } else {
            shell.exec(`code ${path}`)
        }
    });

program.parse(process.argv);
