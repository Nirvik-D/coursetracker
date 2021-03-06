from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm


def signup(request):
    """Sign the user up and log them in."""
    if request.user.is_authenticated:
        return redirect('/courses')
    form = UserCreationForm()
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            user = authenticate(username=form.cleaned_data.get('username'), password=form.cleaned_data.get('password1'))
            login(request, user)  # Django redirects to LOGIN_REDIRECT_URL for us
            return redirect('/')
    return render(request, 'accounts/signup.html', {'form': form})


def welcome(request):
    return render(request, 'accounts/welcome.html')
