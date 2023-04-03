# How To Use SCP To Transfer File

```bash
scp THE_FILES_WE_WANT_TO_SEND_TO_ANOTHER_SERVER username@server
```

## Example

```bash
echo 123 > ~/a.txt
scp ~/a.txt root@10.1.0.102:/root/a.txt
```

