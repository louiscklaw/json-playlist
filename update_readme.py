#!/usr/bin/env python3

import os,sys
from pprint import pprint

for (root,dirs,files) in os.walk('.'):
  pprint(files)