
namespace IS4_Admin.BasicSamples.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("BasicSamples.DragDropSample")]
    [BasedOnRow(typeof(Entities.DragDropSampleRow))]
    public class DragDropSampleForm
    {
        public String Title { get; set; }
    }
}