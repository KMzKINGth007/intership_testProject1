export class DateUtils {
    public static dateToString(date: Date): string | null {
      if (date !== null) {
        const formatter = new Intl.DateTimeFormat('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        });
        return formatter.format(date);
      }
      return null;
    }
  
    public static genDateNext(): Date {
      const dt = new Date();
      const c = new Date(dt.getTime() + 5 * 24 * 60 * 60 * 1000);
      return c;
    }
  
    public static stringToDate(dateString: string): Date | null {
      const format = new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
      const parts = dateString.split('-');
      if (parts.length !== 3) {
        return null;
      }
      const date = new Date(parseInt(parts[2], 10), parseInt(parts[1], 10) - 1, parseInt(parts[0], 10));
      return date;
    }
  
    public static dateToString2(date: Date): string | null {
      if (date !== null) {
        const formatter = new Intl.DateTimeFormat('en-GB', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });
        return formatter.format(date).replace(/\//g, '').replace(/:/g, '');
      }
      return null;
    }
  }