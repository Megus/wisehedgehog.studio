#!/bin/bash
bundle exec jekyll clean
JEKYLL_ENV=production bundle exec jekyll build