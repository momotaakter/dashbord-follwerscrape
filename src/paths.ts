
export const paths = {
  home: '/',
 
  dashboard: {
  
    user: '/dashboard/user',
    addUser: '/dashboard/add-user',
    
    changeEmail: '/dashboard/change-email',
    subscriptionPlan: '/dashboard/user-subscription-plan',
    scrapeOrder: '/dashboard/scrape-order',
    checkouts: '/dashboard/checkouts',
    customCredit: '/dashboard/custom-credit',
    aiTemplate: '/dashboard/ai-template',
    googleTemplate: '/dashboard/google-template',
    messages: '/dashboard/messages',
    workers: '/dashboard/workers',
  },
  errors: {
    notFound: '/errors/not-found',
  },
} as const;



