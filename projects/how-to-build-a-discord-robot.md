# How To Build A Discord Robot

[Discord Developer Portal — Documentation — Intro](https://discord.com/developers/docs/intro)

[Discord Developer Portal — Documentation — Community Resources](https://discord.com/developers/docs/topics/community-resources)



![image-20230330110720493](./pictures/how-to-build-a-discord-robot/image-20230330110720493.png)

![image-20230330111046392](./pictures/how-to-build-a-discord-robot/image-20230330111046392.png)

![image-20230330111124122](./pictures/how-to-build-a-discord-robot/image-20230330111124122.png)



## How to add a robot to my server

![image-20230330113045130](./pictures/how-to-build-a-discord-robot/image-20230330113045130.png)

Get the invitation link

![image-20230330113105018](./pictures/how-to-build-a-discord-robot/image-20230330113105018.png)



![image-20230330113210852](./pictures/how-to-build-a-discord-robot/image-20230330113210852.png)



![image-20230330113330724](./pictures/how-to-build-a-discord-robot/image-20230330113330724.png)

## 

## Some Useful API

### How to reply a message

```python
await message.channel.send('Hello!')
```

### How to receive message

```python
@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('$hello'):
        await message.channel.send('Hello!')
```

