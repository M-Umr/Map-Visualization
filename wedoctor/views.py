from django.shortcuts import render
from django.http import HttpResponse
import pandas as pd 
import numpy as np


def index(request):
    
    return render(request, 'index.html')