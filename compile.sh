#!/bin/bash

lessc css/shop.less > css/shop.css

jade -P shop.jade
jade -P shop1.jade