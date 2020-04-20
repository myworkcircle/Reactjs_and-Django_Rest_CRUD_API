#include <bits/stdc++.h>
using namespace std;
#define ll long long
#define MOD 1000000007

ll knapSack(ll W, ll wt[], ll val[], ll n) 
{
	ll i, w; 
	ll dp[n + 1][W + 1]; 
	for (i = 0; i <= n; i++) { 
		for (w = 0; w <= W; w++) { 
			if (i == 0 || w == 0) 
				dp[i][w] = 0; 
			else if (wt[i - 1] <= w) 
				dp[i][w] = max(val[i - 1] + 
					dp[i - 1][w - wt[i - 1]], dp[i - 1][w]); 
			else
				dp[i][w] = dp[i - 1][w]; 
		} 
	} 

	
	ll res = dp[n][W];	 
	w = W; 
	ll ans=0;
	for (i = n; i > 0 && res > 0; i--) 
	{ 
		if (res == dp[i - 1][w]) continue;		 
		else 
		{ 
			ans += val[i-1];
			res = res - val[i - 1]; 
			w = w - wt[i - 1]; 
		} 
	} 
	return ans;
} 
int main(){ 

	ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int t;
    // cout<<"sjsjd<<endl"<<endl;
    cin>>t;
    while(t--)
	
	{
	    ll n,w,x,y,ans=0,i,j;
	    cin>>n>>w>>x>>y;
	    ll wt[n+5],value[n+5];

	    for(i=0;i<n;i++) cin>>wt[i];

	    for(i=0;i<n;i++) cin>>value[i];
	    if(x<y) swap(x,y);
	    for(i=0;i<n;i++)
	    {
	        for(j=0;j<n;j++)
	        {
	            if(i==j) 
	            {
	                value[i]*=x;
	                ans=max(ans,knapSack(w,wt,value,n));
	                value[i]/=x;
	            }
	            else
	            {
	                if(value[i]>=value[j])
	                {
	                    value[i]=value[i]*x;
	                    value[j]=value[j]*y;
	                    ans=max(ans,knapSack(w,wt,value,n));
	                    value[i] = value[i]/x;
	                    value[j]=value[j]/y;
	                }
	                else
	                {
	                    value[j]=value[j]*x;
	                    value[i]=value[i]*y;
	                    ans=max(ans,knapSack(w,wt,value,n));
	                    value[j] = value[j]/x;
	                    value[i]=value[i]/y;
	                }
	            }
	        }
	    }
	    cout<<ans<<endl;
	}
	return 0;
}