
namespace IS4_Admin.Meeting.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Meeting.MeetingAgendaType")]
    [BasedOnRow(typeof(Entities.MeetingAgendaTypeRow))]
    public class MeetingAgendaTypeForm
    {
        public String Name { get; set; }
    }
}