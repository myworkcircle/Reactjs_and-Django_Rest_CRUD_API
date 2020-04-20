### For searchrecipe view

# viewsets does not provide method post or get , instead provides create, list
# RetrieveAPIView is used to fetch only one value if database contains multiple instances of same it will falter at that point

# we can use filter backend or search filter but it should be used with ListAPIView cause if the search returns multiple results than retrieve api view will fail at this point.

# GENERIC :- UpdateAPIView {

}