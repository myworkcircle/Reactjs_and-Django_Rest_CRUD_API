from django.urls import path
from .views import (
    userviewset,getapiview,createrecipe,
    recipeviewset,searchrecipe,updaterecipe,
    listapiview
)
from django.contrib.auth import views as auth_views
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers
from django.conf.urls import include

router = routers.DefaultRouter()
router.register('user',userviewset)
router.register('index',recipeviewset)
# router.register('list',listapiview)
# router.register('search',searchrecipe)  

urlpatterns=[
    path('',include(router.urls)),
    path('list/',listapiview.as_view(),name='listall'),
    path('get/<name>/',searchrecipe.as_view(),name='fet'),
    path('update/<name>/',updaterecipe.as_view(),name='update')
    # path('create/',createrecipe.as_view(),name='create'),
#     path('',user_views.index,name='index'),
#     path('index2/',user_views.index2,name='index2'),
#     path('ind/',user_views.ind,name='ind'),
#     path('search/<file>/',user_views.search,name='search'),
#     path('addrecipe/',user_views.addrecipe,name='addrecipe'),
#     path('register/',user_views.register,name='register'),
#     path('searchfunc/',user_views.searchfunc,name='searchfunc'),
#     path('login/',auth_views.LoginView.as_view(template_name='login.html'),name='login'),
#     path('logout/',auth_views.LogoutView.as_view(template_name='logout.html'),name='logout'),
]
urlpatterns+=static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns+=static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
