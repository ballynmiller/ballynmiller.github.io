---
layout: post
title: "Readability vs Performance"
comments: true
keywords: maintanence,beginner,developer,blogging,atlanta
---

### This is a basic example of increasing the performance of a for loop.

*Most people familiar with python would probably use the list comprehension.*

```python
#!.venv/bin/python

def sort():
    evens = []
    for x in xrange(0, 101):
        if x % 2 == 0:
            evens.append(x)

def sort2():
    evens = [x for x in xrange(0, 101) if not(x%2)]

if __name__ == "__main__":
    import timeit
    
    # ~avg .14ms
    print timeit.timeit("sort()",
        setup="from __main__ import sort", number=10000)
    
    # ~avg .089ms
    print timeit.timeit("sort2()",
        setup="from __main__ import sort2", number=10000)
```

I'm using the code snippet above to ask the following question at what point do you think
it's okay to reduce the readability of the code in order to increase code performance?

Someone new to python would easily be able to understand the for loop iteration because it's
similar to what they're familiar with, but you can easily shave off time by creating a list comprehension
shouldn't it be the developer's responsiblity to increase their familiarity with a language.

### Here's another example

```python
#!.venv/bin/python

class Test(object):
	def __init__(self):
		self.foo = 5

	def __dict__(self):
		"""Easier to read.

		The developer clearly sees what's being returned
		to the user.
		"""
		return {
			'foo': self.foo
		}

class Test2(object):
	def __init__(self):
		self.foo = 5

	def __dict__(self):
		"""Easier to maintain.

		The developer never has to update this function.
		If new attributes are added they'll be included.
		"""
		return super(Test2, self).__dict__
```

I would say the moral of the story is that you should do whatever benefits your
project / coding preferences. If you're working with a team i would say strive
to make your code readable and maintainable. If you're just hacking away you're
probably focusing on turnaround time vs maintainability.
