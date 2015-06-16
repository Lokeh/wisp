# wisp 1.0

## Reset a ghost blog password

Since I'm not too bright, I always forget what I set my password to while working on my blog locally. So I wrote a tool to reset my password for me. **OBVIOUSLY DO NOT USE THIS IN PRODUCTION UNLESS YOU CHANGE YOUR PASSWORD RIGHT AWAY.**

I only tested this with node v0.10.35 and OS X. Normally I'm all about io.js but Ghost requires node v0.10, so I'm usually using v0.10 when working on a project in Ghost.

## Install

`npm install Lokeh/wisp -g`

## Usage

`wisp` changes the first user's (id = 1) password to, simply, 'password'. I may add args later to customize this.

```
$ cd ~/code/ghost/content/data
$ wisp
Success!
```

Now go log in.
