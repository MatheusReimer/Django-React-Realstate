from django.contrib.auth import get_user_model
User = get_user_model()
from rest_framework.response import  Response
from rest_framework.views import APIView
from rest_framework import permissions

class SignupView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self,request,formate=None):
        data = self.request.data

        name =  data['name']
        email =  data['email']
        password =  data['password']
        password2 =  data['password2']

        if password == password2:
            if User.objects.filter(email=email).exists():
                return Response({'error':'Uma conta com este e-mail já existe '})
            else:
                if len(password) < 6:
                    return Response({'error': 'A senha deve ter pelo menos 6 caracteres'})
                else:
                    user = User.objects.create_user(email = email, password = password, name = name)

                    user.save()
                    return Response({'success': 'Usuário foi criado com sucesso'})
        else:
            return Response({'error': 'Senhas não combinam'})
       