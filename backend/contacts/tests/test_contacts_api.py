from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from contacts.models import Contact

class ContactAPITest(APITestCase):

    def test_create_contact(self):
        url = "/api/contacts/"
        data = {
            "first_name": "Sofiane",
            "last_name": "Haddad",
            "email": "sofiane@example.com"
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Contact.objects.count(), 1)
