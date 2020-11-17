export const getRedirectUrl = auth => {
  switch (auth.user.role) {
    case "seller":
      return "/seller-dashboard";
    case "deliveryperson":
      return "/delivery-dashboard";
    case "admin":
      return "/admin-dashboard";
    default:
      return "/";
  }
};
