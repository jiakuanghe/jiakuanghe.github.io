# Markdown Syntax

[Markdown - Wikipedia](https://en.wikipedia.org/wiki/Markdown)

[Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)



## What is markdown?

**Markdown**[[9\]](https://en.wikipedia.org/wiki/Markdown#cite_note-philosophy-9) is a [lightweight markup language](https://en.wikipedia.org/wiki/Lightweight_markup_language) for creating [formatted text](https://en.wikipedia.org/wiki/Formatted_text) using a [plain-text editor](https://en.wikipedia.org/wiki/Text_editor).

Similar to HTML [HTML - Wikipedia](https://en.m.wikipedia.org/wiki/HTML)



## Where can we use this syntax?

1. Discord
2. GitHub README Document [jdk/README.md at master · openjdk/jdk · GitHub](https://github.com/openjdk/jdk/blob/master/README.md)
3. Editors: Typora, VSCode
4. Eclipse: [Install plugins](https://marketplace.eclipse.org/content/markdown-text-editor)



```
Tech Events Calendar Links (WIP)

Tech Events (In-person, No-Cost ||or low-cost||) - main calendar
 https://calendar.google.com/calendar/embed?src=0fa7cf7bd86b3bc590cea0d12e21dbc7a89deae1d71fbda4c4177141a4ed0dac%40group.calendar.google.com&ctz=UTC

~~Tech Events (Online)
https://calendar.google.com/calendar/embed?src=a863d235720d61652811f56b4a654b458fa570404a369c65cc4e5985e9bef12e%40group.calendar.google.com&ctz=UTC
A lot of these

Tech Events (Expensive)
https://calendar.google.com/calendar/embed?src=202467bb604d864546ddde261a0c8f04fd0bff03bbfe0c7682cadb5dfe4e945c%40group.calendar.google.com&ctz=UTC
Unlike to take advantage of, but tracking them anyway
~~

Edit: With use of tags and [Tags for Google Calendar](https://chrome.google.com/webstore/detail/tags-for-google-calendar/ncpjnjohbcgocheijdaafoidjnkpajka/related),
the online and expensive events are once again folded back into the main event calendar
```





## Some Frequent Used Syntax

### Link

[Markdown](https://en.wikipedia.org/wiki/Markdown)

```
[Markdown](https://en.wikipedia.org/wiki/Markdown)
```



### Blockquote

> This is a comment

```
> This is a comment
```



### Heading

# Heading1
## Heading2
## Heading3

```
# Heading1
## Heading2
## Heading3
```



### Fenced Code Block

````
```language(java,json,c,cpp)
```
````



### [Strikethrough](https://www.markdownguide.org/extended-syntax/#strikethrough)

~~The world is flat.~~



### Hide Content

people need to click to reveal the content

In-person, No-Cost ||or low-cost||



#### Java Code

##### How it looks like

```java
public class Test {

	public static void main(String[] args){

		System.out.println("Hello, World!");
	
	}
}
```

##### Source code

````
```java
public class Test {

	public static void main(String[] args){

		System.out.println("Hello, World!");
	
	}
}
```
````



#### JSON Code

##### How it looks like

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

##### Source code

````
```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```
````