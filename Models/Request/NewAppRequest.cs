using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Inspinia_MVC5.Models.Request
{
    public class NewAppRequest
    {
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string email { get; set; }
        public string homePhone { get; set; }
        public string mobilePhone { get; set; }
        public List<string> goals { get; set; }
        public int cashOut { get; set; }
        public int newTerm { get; set; }
        public int desiredSavings { get; set; }
        public int consolidationSum { get; set; }
        public int consolidationPayments { get; set; }
        public string occupancy { get; set; }
        public int currentBalance { get; set; }
        public double currentRate { get; set; }
        public int currentTerm { get; set; }
        public int currentPayment { get; set; }
        public bool isCurrentEscrow { get; set; }
        public int currentEscrowTotal { get; set; }
        public bool isCurrentPmi { get; set; }
        public int currentPmiTotal { get; set; }
        public string propertyType { get; set; }
        public int propertyValue { get; set; }
        public string fico { get; set; }
        public double ltv { get; set; }
    }
}

