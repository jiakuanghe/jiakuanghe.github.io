# How To Use SSH To Login

```bash
ssh username@server
```

### Example

```bash
ssh root@10.1.0.101
```



![image-20230403152910503](./pictures/how-to-use-ssh-to-login/image-20230403152910503.png)



If we press `no`, the ssh will disconnect.

![image-20230403152942586](./pictures/how-to-use-ssh-to-login/image-20230403152942586.png)



For safety reason, any input here will not be shown.

![image-20230403153053280](./pictures/how-to-use-ssh-to-login/image-20230403153053280.png)



![image-20230403153138847](./pictures/how-to-use-ssh-to-login/image-20230403153138847.png)



## Permission denied, please try again.

If the password is wrong, you will get the tips `Permission denied, please try again.`

![image-20230403153710964](./pictures/how-to-use-ssh-to-login/image-20230403153710964.png)



## Passwordless login

###  1. Create a ssh key

   ```bash
   ssh-keygen
   ```

   Press down enter to save the default directory

   ![image-20230403154422100](./pictures/how-to-use-ssh-to-login/image-20230403154422100.png)

![image-20230403154511669](./pictures/how-to-use-ssh-to-login/image-20230403154511669.png)



### 2. ssh-copy-id

```bash
ssh-copy-id username@server_ip
```

![image-20230403154951437](./pictures/how-to-use-ssh-to-login/image-20230403154951437.png)



### How they work

Server 10.1.0.101

![image-20230403155406274](./pictures/how-to-use-ssh-to-login/image-20230403155406274.png)

Connected Server 10.1.0.102

![image-20230403155436210](./pictures/how-to-use-ssh-to-login/image-20230403155436210.png)



![Untitled Diagram.drawio](./pictures/how-to-use-ssh-to-login/Untitled%20Diagram.drawio.png)



## RSA

RSA (Rivest–Shamir–Adleman) is a public-key cryptosystem that is widely used for secure data transmission.

[RSA (cryptosystem) - Wikipedia](https://en.wikipedia.org/wiki/RSA_(cryptosystem))



## public key and private key

In a public-key cryptosystem, the encryption key is public and distinct from the decryption key, which is kept secret (private).

public key: send to others, can be public

private key: secret key, we need to make it safe

