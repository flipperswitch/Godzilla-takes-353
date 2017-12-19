using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApi.Models;
using WebApi.Repositories;

namespace WebApi.Repositories
{
    public class LostReportRepository
    {
        private List<LostItemReport> _lostReports;

        public LostReportRepository()
        {
            //todo: create inital reports to draw from
           // _lostReports = (List<LostItemReport>)HttpContext.Current.Application["Items"];
        }
        public List<LostItemReport> Get()
        {
            return _lostReports;
        }

        public LostItemReport Get(int id)
        {
            return _lostReports.FirstOrDefault(w => w.ReportNumber == id);
        }

        public int Add(LostItemReport report)
        {

            int id = _lostReports.Max(w => w.ReportNumber);
            report.ReportNumber = id + 1;
            _lostReports.Add(report);
            return id;
        }

        public void Update(LostItemReport report)
        {

            var changed = _lostReports.FirstOrDefault(ws => ws.ReportNumber == report.ReportNumber);
            changed = report;

        }

        public void Remove(int id)
        {
            var item = _lostReports.FirstOrDefault(ws => ws.ReportNumber == id);
            if (item != null)
            {
                _lostReports.Remove(item);
            }
        }
    }
}