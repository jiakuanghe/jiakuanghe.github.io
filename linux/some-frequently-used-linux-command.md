# Some Frequently Used Linux Command

## man

used to check for description and arguments for the command

### Example

```bash
man ls
```

![image-20230320160357131](./pictures/some-frequently-used-linux-command/image-20230320160357131.png)



## ls

list directories and files contents

### Example

```bash
ls
```

![image-20230320160248696](pictures/some-frequently-used-linux-command/image-20230320160248696.png)



### -l

use a long listing format

### Example

```bash
ls -l
```

![image-20230320160304809](pictures/some-frequently-used-linux-command/image-20230320160304809.png)



## date

### Exanple

```bash
date
```

![image-20230320160630256](./pictures/some-frequently-used-linux-command/image-20230320160630256.png)



## vi

VI is an editor to edit the file content.

### Example

```bash
vi a.txt
```

> You need to make sure you have a.txt file. If you haven't, you need to create it first.
>
> You only need to execute command first time.
>
> ```bash
> touch a.txt
> ```



### mode

#### Normal Mode

When you use `vi` to open/edit the file, you enter the normal mode.

Press down `esc` in any mode (on the left upper conner, one key) command to go back to the Normal Mode.



#### Insert Mode

If you want to edit the file, you need to use the Insert Mode.

Use `i` to enter the Insert Mode.



#### **Command-line** or **Cmdline** mode

If you want to use some command, you need to use in this mode.

use `:` to go the command-line mode.

quit the vi `:q`

write and quit `:wq`

quit without save `:q!` (If you edit anything after you use insert mode, you don't want to save it)

>  If you edit anything in the `vi`, and use the `:q`, the vi command will give you a warning.
>
> ![image-20230320162536569](pictures/some-frequently-used-linux-command/image-20230320162536569.png)



![image-20230320162240694](./pictures/some-frequently-used-linux-command/image-20230320162240694.png)



![Untitled Diagram.drawio (1)](./pictures/some-frequently-used-linux-command/Untitled%20Diagram.drawio%20(1).png)



![img](./pictures/some-frequently-used-linux-command/vi-vim-cheat-sheet.gif)



> References:
>
> [vi - Wikipedia](https://en.wikipedia.org/wiki/Vi)
>
> [vi-vim-cheat-sheet.gif (1024×724) (viemu.com)](http://www.viemu.com/vi-vim-cheat-sheet.gif)
>
> [Vim (text editor) - Wikipedia](https://en.wikipedia.org/wiki/Vim_(text_editor)#Modes)



## rm

abbr: ReMove

used to remove the file or directory

```bash
rm THE_FILE_YOU_WANT_TO_REMOVE
```

Example:

```bash
touch a.txt
rm a.txt
```





## pwd

Print Working Directory

![image-20230320161043117](./pictures/some-frequently-used-linux-command/image-20230320161043117.png)



## whoami

![image-20230320160742548](./pictures/some-frequently-used-linux-command/image-20230320160742548.png)



## cd

Change Directory

### Example

```bash
cd Desktop
```

> Use `ls` to check what directory you have first.

![image-20230320160942841](./pictures/some-frequently-used-linux-command/image-20230320160942841.png)



## wget

```
wget https://upload.wikimedia.org/wikipedia/commons/8/80/Cowsay_Typical_Output.png
```



## passwd

```bash
passwd THE_USERNAME_WE_WANT_TO_EDIT_THE_PASSWORD
```

### Example

```bash
passwd root
```





## Some Playful Command

### fortune

![image-20230320165121218](./pictures/some-frequently-used-linux-command/image-20230320165121218.png)



### cowsay

`Welcome to join AIClub` is the content you want to let the cow say.

```bash
cowsay Welcome to join AIClub
```

![image-20230320165012405](./pictures/some-frequently-used-linux-command/image-20230320165012405.png)



### sl

![image-20230320164626121](./pictures/some-frequently-used-linux-command/image-20230320164626121.png)