using System.ComponentModel.DataAnnotations;

namespace KartvizitAppAPI.Models
{
    public class Kartvizit
    {
        [Key]
        public int Id { get; set; }
        [StringLength(30,ErrorMessage ="Title can not more then 30 characters."),Required]
        public string Title { get; set; }
        [StringLength(30, ErrorMessage = "Name can not more then 30 characters.")]
        public string? Name { get; set; }
        [StringLength(12, ErrorMessage = "Phone can not more then 30 characters."),Required]
        public string Phone { get; set; }
        [StringLength(50, ErrorMessage = "Address can not more then 30 characters.")]
        public string? Address { get; set; }
        //[StringLength(30, ErrorMessage = "Email can not more then 30 characters."),EmailAddress]
        //public string? Email { get; set; }

        private string _Email;
        [EmailAddress(ErrorMessage = "Gecerli bir mail giriniz.")]
        public string? Email { get { return _Email; } set { _Email = string.IsNullOrWhiteSpace(value) ? null : value; } }


    }
}
